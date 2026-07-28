import { ImageResponse } from "next/og";

export const alt = "Jacob Maynard | AI Systems Architect";
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
          justifyContent: "center",
          padding: 80,
          background: "#FAFAF8",
          color: "#18365B",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#667085",
            marginBottom: 36,
          }}
        >
          Executive Architecture Brief
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            lineHeight: 1.05,
            fontFamily: "Georgia, serif",
            maxWidth: 900,
          }}
        >
          Jacob Maynard
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#667085",
          }}
        >
          Founder · AI Systems Architect
        </div>
        <div
          style={{
            display: "flex",
            width: 44,
            height: 1,
            background: "#B78A2D",
            marginTop: 36,
            marginBottom: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            color: "#18365B",
            maxWidth: 760,
          }}
        >
          Designing software that reduces operational burden.
        </div>
      </div>
    ),
    size,
  );
}
