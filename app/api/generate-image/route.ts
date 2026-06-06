import { NextRequest, NextResponse } from 'next/server';
import { generateGrokImage, DEFAULT_ARENA_PROMPT } from '@/lib/grok-imagine';

/**
 * POST /api/generate-image
 * Body: { prompt?: string }
 *
 * Returns: { success: true, image: string (data URL), prompt: string }
 * On error: { success: false, error: string }
 *
 * This route keeps the XAI_API_KEY 100% server-side.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const prompt: string = (body?.prompt || DEFAULT_ARENA_PROMPT).toString();

    const result = await generateGrokImage(prompt);

    return NextResponse.json({
      success: true,
      image: result.dataUrl,
      prompt: result.prompt,
    });
  } catch (error: any) {
    const message = error?.message || 'Image generation failed';
    const status = message.toLowerCase().includes('rate') ? 429 : 500;

    return NextResponse.json(
      { success: false, error: message },
      { status }
    );
  }
}

// Optional: allow using the default prompt via GET for quick testing
export async function GET() {
  try {
    const result = await generateGrokImage(DEFAULT_ARENA_PROMPT);
    return NextResponse.json({
      success: true,
      image: result.dataUrl,
      prompt: result.prompt,
      note: 'Default arena concept (cached)',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed' },
      { status: 500 }
    );
  }
}
