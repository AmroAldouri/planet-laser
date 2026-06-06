import 'server-only';

import { xai } from '@ai-sdk/xai';
import { experimental_generateImage as generateImage } from 'ai';

/**
 * Grok Imagine utility
 * Uses the official xAI provider via Vercel AI SDK.
 * Provides error handling + in-memory caching by prompt (TTL 60 minutes).
 *
 * IMPORTANT: This must only be called from server-side code (Route Handlers, Server Actions, etc).
 * Never import or call from client components.
 */

export type GeneratedImage = {
  /** Raw base64 string (without data: prefix) */
  base64: string;
  /** Ready-to-use data URL for <img src> */
  dataUrl: string;
  /** The prompt that was used */
  prompt: string;
};

const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour
const cache = new Map<string, { data: GeneratedImage; expires: number }>();

function getCacheKey(prompt: string): string {
  return prompt.trim().toLowerCase();
}

function getCached(prompt: string): GeneratedImage | null {
  const key = getCacheKey(prompt);
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}

function setCached(prompt: string, image: GeneratedImage): void {
  const key = getCacheKey(prompt);
  cache.set(key, {
    data: image,
    expires: Date.now() + CACHE_TTL_MS,
  });
}

/**
 * Generate an image using Grok Imagine (xAI).
 * Results for identical prompts are cached for 1 hour to avoid unnecessary API calls.
 */
export async function generateGrokImage(prompt: string): Promise<GeneratedImage> {
  if (!prompt || prompt.trim().length < 5) {
    throw new Error('A descriptive prompt is required.');
  }

  const cached = getCached(prompt);
  if (cached) {
    return cached;
  }

  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    throw new Error('XAI_API_KEY environment variable is not set. Add it to .env.local.');
  }

  try {
    const { image } = await generateImage({
      model: xai.image('grok-imagine-image'),
      prompt: prompt.trim(),
      // You can pass more options here:
      // aspectRatio: '16:9',
      // providerOptions: { xai: { quality: 'high' } },
    });

    // The SDK returns a type with .base64 for base64-encoded image data.
    const base64 = (image as any).base64 ?? (image as any).b64_json;
    if (!base64) {
      // Fallback: if only uint8Array is provided
      const uint8 = (image as any).uint8Array;
      if (uint8) {
        const b64 = Buffer.from(uint8).toString('base64');
        const dataUrl = `data:image/png;base64,${b64}`;
        const result: GeneratedImage = { base64: b64, dataUrl, prompt };
        setCached(prompt, result);
        return result;
      }
      throw new Error('Unexpected response format from image generation.');
    }

    const dataUrl = `data:image/png;base64,${base64}`;
    const result: GeneratedImage = { base64, dataUrl, prompt };

    setCached(prompt, result);
    return result;
  } catch (error: any) {
    console.error('[grok-imagine] Generation failed:', error);

    // Provide user-friendly messages
    const message = error?.message || '';
    if (message.includes('rate') || error?.status === 429) {
      throw new Error('Image generation is rate-limited right now. Please wait a moment and try again.');
    }
    if (message.includes('invalid') && message.includes('key')) {
      throw new Error('Invalid XAI_API_KEY. Check your .env.local file.');
    }
    if (message.includes('safety') || message.includes('policy')) {
      throw new Error('The prompt was blocked by safety filters. Try a different description.');
    }

    throw new Error('Failed to generate image with Grok Imagine. Please try again.');
  }
}

/**
 * A fun, on-brand default prompt for the Planet Laser arena demo.
 */
export const DEFAULT_ARENA_PROMPT =
  'A cinematic wide shot of Planet Laser\'s epic multi-level laser tag arena in Oakville at night. ' +
  'Dramatic volumetric fog, intense neon cyan, magenta, purple, and electric blue lighting. ' +
  'Players in glowing sensor vests and phasers engaged in an intense team battle on different levels. ' +
  'High-energy cosmic space theme, reflective surfaces, laser beams streaking through the air, ' +
  'ultra detailed, vibrant colors, immersive entertainment venue photography style, 16:9';
