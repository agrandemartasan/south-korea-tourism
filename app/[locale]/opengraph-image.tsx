import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Discover South Korea";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = path.join(
    process.cwd(),
    "public/media/images/logo-white.png"
  );
  const logoData = fs.readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1b1b1e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          padding: "60px 80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          width={400}
          alt="Discover South Korea"
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <p
            style={{
              color: "#f8f9fa",
              fontSize: 54,
              fontWeight: 700,
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Discover South Korea
          </p>
          <p
            style={{
              color: "#e4b400",
              fontSize: 28,
              fontWeight: 400,
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            Where Tradition Meets Future
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
