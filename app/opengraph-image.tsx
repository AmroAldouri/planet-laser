import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const alt = `${BUSINESS.name}, Laser Tag & Arcade in Oakville`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06060f 0%, #141428 50%, #1e1035 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: 200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(0, 240, 255, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255, 43, 214, 0.15)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(90deg, #3b82f6, #f59e0b)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: -2,
            }}
          >
            {BUSINESS.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Laser Tag · Birthday Parties · Arcade · Corporate Events
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(0,240,255,0.9)",
              marginTop: 8,
            }}
          >
            Oakville · Mississauga · Burlington
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
