import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "FUJIE DENKO — Energy & Computational Hardware";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // The provided FD symbol, used as-is (margins cropped only).
  const mark = await readFile(join(process.cwd(), "public/fd-mark.png"));
  const src = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#666666", letterSpacing: 2 }}>
          <span>FUJIE DENKO / JAPAN</span>
          <span style={{ color: "#155EEF" }}>RESEARCH &amp; PROTOTYPING</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 56 }}>
          <img src={src} width={360} height={180} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 76, fontWeight: 700, letterSpacing: 6 }}>FUJIE DENKO</span>
            <span style={{ fontSize: 32, color: "#666666", marginTop: 8 }}>Energy &amp; Computational Hardware</span>
          </div>
        </div>
        <div style={{ display: "flex", borderTop: "2px solid #111111", paddingTop: 20, fontSize: 22, color: "#666666" }}>
          Energy Harvesting · Neuromorphic Computing · Next-Generation Hardware
        </div>
      </div>
    ),
    size,
  );
}
