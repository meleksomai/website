import { env } from "cloudflare:workers";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import draft_system_prompt from "./prompt.md";

export async function draftEmail(
  emailContent: string | Uint8Array<ArrayBufferLike>,
  emailFrom: string,
  emailSubject: string
): Promise<string> {
  const url = await env.AI.gateway(env.CLOUDFLARE_AI_GATEWAY_ID).getUrl(
    "openai"
  );
  const model = createOpenAI({
    baseURL: url,
    apiKey: env.OPENAI_API_KEY,
    headers: {
      "cf-aig-authorization": `Bearer ${env.CLOUDFLARE_AI_GATEWAY_TOKEN}`,
    },
  });
  // Generate classification using AI model
  const { output } = await generateText({
    model: model.languageModel("gpt-5.2"),
    system: draft_system_prompt,
    prompt: `Draft a reply to the following email:\n\nfrom:${emailFrom}\n\n subject:${emailSubject}\n\n content:\n\n${emailContent}`,
  });

  return output;
}
