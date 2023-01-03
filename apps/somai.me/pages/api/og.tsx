import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 255)
      : "Physician. Clinical Informatician. Data Scientist. Innovator.";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            backgroundColor: "hsl(240, 5.1%, 11.6%)",
            // backgroundImage:
            // "radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 25,
                height: 25,
                background: "hsl(256, 6.0%, 93.2%)",
              }}
            />
            <span
              style={{
                marginLeft: 8,
                fontSize: 30,
                color: "hsl(256, 6.0%, 93.2%)",
              }}
            >
              somai.me
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 45,
              fontStyle: "normal",
              color: "hsl(256, 6.0%, 93.2%)",
              marginTop: 0,
              lineHeight: 1.8,
              whiteSpace: "pre-line",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              padding: "20px 90px",
              margin: "0 42px",
              width: "auto",
              maxWidth: "100%",
              textAlign: "left",
              float: "left",
            }}
          >
            <span
              style={{
                flexWrap: "wrap",
                paddingRight: 10,
                justifyContent: "flex-start",
              }}
            >
              Melek Somai.
            </span>
            <span
              style={{
                color: "hsl(206, 5.2%, 49.5%)",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {title}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
