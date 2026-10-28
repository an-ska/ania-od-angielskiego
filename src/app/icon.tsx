import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3b5249",
          borderRadius: 8,
          color: "#fcf9f2",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
