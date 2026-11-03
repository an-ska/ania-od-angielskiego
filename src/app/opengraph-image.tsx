import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ania od angielskiego — korepetycje angielskiego online";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photoData = await readFile(
    join(process.cwd(), "public/ania-hero-circle.png"),
  );
  const photoSrc = `data:image/png;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "48px 56px",
          backgroundColor: "#dcd0e5",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #cbb9d8 1.1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 22,
            width: 640,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              fontSize: 26,
              fontWeight: 700,
              color: "#3b5249",
              backgroundColor: "#fcf9f2",
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            Korepetycje online · 5/5
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 800,
                lineHeight: 1.02,
                color: "#1a2621",
                letterSpacing: "-0.03em",
              }}
            >
              Ania od angielskiego
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.35,
                color: "#3b5249",
                maxWidth: 580,
              }}
            >
              Angielski 1:1: od szkolnych egzaminów po komunikację w IT
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {["Ósmoklasista", "Matura", "Angielski w IT", "od 80 zł"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#2b3a32",
                    backgroundColor: "#fcf9f2",
                    borderRadius: 16,
                    padding: "10px 18px",
                  }}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            height: 420,
            borderRadius: 999,
            backgroundColor: "#cbb9d8",
            boxShadow: "0 18px 40px rgba(43, 58, 50, 0.18)",
            overflow: "hidden",
          }}
        >
          <img
            src={photoSrc}
            width={420}
            height={420}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
