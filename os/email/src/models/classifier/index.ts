import { env } from "cloudflare:workers";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText, Output } from "ai";
import { z } from "zod";
import classification_prompt from "./prompt.md";

export const EmailIntentSchema = z.enum([
  "scheduling",
  "information_request",
  "action_request",
  "introduction_networking",
  "sales_vendor",
  "fyi_notification",
  "sensitive_legal_financial",
  "unknown_ambiguous",
]);

export const EmailClassificationSchema = z.object({
  intents: z.array(EmailIntentSchema).min(1),
  risk: z.enum(["low", "medium", "high"]),
  action: z.enum(["reply", "forward", "ignore"]),
  // Whether the assistant should wait for explicit user approval before sending or committing.
  requires_approval: z.boolean(),
  // A short explanation for logs and UI surfaces.
  comments: z.string().min(1).max(500),
});

export type EmailClassification = z.infer<typeof EmailClassificationSchema>;

export async function classifyEmailContent(
  emailContent: string,
  emailFrom: string,
  emailSubject: string
): Promise<EmailClassification> {
  const url = await env.AI.gateway(env.CLOUDFLARE_AI_GATEWAY_ID).getUrl(
    "openai"
  );
  console.log("Classifying email content...", url);
  const model = createOpenAI({
    baseURL: url,
    apiKey: env.OPENAI_API_KEY,
    headers: {
      "cf-aig-authorization": `Bearer ${env.CLOUDFLARE_AI_GATEWAY_TOKEN}`,
    },
  });
  console.log("Generating classification...");
  // Generate classification using AI model
  const { output } = await generateText({
    model: model.languageModel("gpt-5.2"),
    system: classification_prompt,
    output: Output.object({
      schema: EmailClassificationSchema,
    }),
    prompt: `Classify the following email:\n\nfrom:${emailFrom}\n\n subject:${emailSubject}\n\n content:\n\n${emailContent}`,
  });

  return output;
}
