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
          padding: 72,
          background: "#0A0A0A",
          color: "#FAFAF8",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: "50%",
            transform: "translateY(-50%)",
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#B78A2D",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#B78A2D",
            marginBottom: 28,
          }}
        >
          Executive Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            lineHeight: 1.05,
            fontFamily: "Georgia, serif",
            maxWidth: 760,
          }}
        >
          Jacob Maynard
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 28,
            color: "rgba(250,250,248,0.75)",
          }}
        >
          Founder · AI Systems Architect
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            color: "#B78A2D",
            maxWidth: 700,
          }}
        >
          Designing software that reduces operational burden.
        </div>
      </div>
    ),
    size,
  );
}
