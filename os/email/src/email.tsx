import { render } from "@workspace/transactional";
import WelcomeEmail from "@workspace/transactional/emails/generic";

export const emailContent = async () =>
  await render(
    <WelcomeEmail
      content={`Hey, \n\n Thank you for reaching out. I will get back to you as soon as I can.\n\nIn the meantime, feel free to explore my [website](https://somai.me) to learn more about my work and projects.\n\nLooking forward to connecting with you!\n`}
      footer="This message was auto-generated."
      previewMessage="Thank you for reaching out!"
    />
  );
