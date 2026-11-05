import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export async function GET() {
  const logo = await readFile(join(process.cwd(), "public/images/combined.png"))
  const logoUrl = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* The padding keeps the full logo visible in social preview crops. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} alt="Progronics Solutions LLP" width={580} style={{ objectFit: "contain" }} />
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
