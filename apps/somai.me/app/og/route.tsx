import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
const size = {
  width: 1200,
  height: 630,
};

// Font
const interBold = fetch(
  new URL("../../public/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interRegular = fetch(
  new URL("../../public/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

// Image generation
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Physician. Clinical Informatician. Data Scientist.";

    // ?subtitle=<subtitle>
    const hasSubtitle = searchParams.has("subtitle");
    const subtitle = hasSubtitle
      ? searchParams.get("subtitle")?.slice(0, 100)
      : "";

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            // backgroundImage:
            //   "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
            backgroundColor: "hsl(240, 5.1%, 11.6%)",
          }}
          tw="h-full w-full flex items-start justify-start"
        >
          <div tw="flex items-start justify-start h-full">
            <div tw="flex flex-col justify-between w-full h-full p-20">
              {/* Melek Somai Logo Here */}
              <div tw="flex flex-col justify-end w-full h-full p-5">
                <h1 tw="text-[60px] text-white font-bold text-left">
                  Melek Somai.
                </h1>
                <h1 tw="text-[60px] text-slate-400 font-normal text-left">
                  {title}
                </h1>
                <p tw="text-[48px] text-white text-left">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        fonts: [
          {
            name: "Inter",
            data: await interBold,
            style: "normal",
            weight: 700,
          },
          {
            name: "Inter",
            data: await interRegular,
            style: "normal",
            weight: 400,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
