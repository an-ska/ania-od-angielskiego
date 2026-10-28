import { ImageResponse } from "next/og";

export const alt = "Ania od angielskiego — lekcje angielskiego online";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#dcd0e5",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #cbb9d8 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
            color: "#3b5249",
            backgroundColor: "#f4efe6",
            borderRadius: 999,
            padding: "12px 24px",
          }}
        >
          Angielski online
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#263830",
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Ania od angielskiego
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.35,
              color: "#4a5c53",
              maxWidth: 820,
            }}
          >
            Korepetycje i indywidualne lekcje angielskiego online
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#3b5249",
            fontWeight: 600,
          }}
        >
          ósmoklasista · matura · angielski w IT · dorośli
        </div>
      </div>
    ),
    { ...size },
  );
}
