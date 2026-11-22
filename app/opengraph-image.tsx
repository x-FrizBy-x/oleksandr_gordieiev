import { ImageResponse } from "next/og";

export const alt = "Oleksandr | Full-Stack Engineer with AI expertise";
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
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f6f3",
          color: "#282724",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>
          oleksandr<span style={{ color: "#bd6748" }}>.dev</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05, letterSpacing: -3 }}>
            Full-Stack Engineer with AI expertise
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#77756f" }}>
            Jelaksy · Lurkk · UniManage
          </div>
        </div>
      </div>
    ),
    size,
  );
}
