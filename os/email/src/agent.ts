import { Agent, type AgentEmail } from "agents";
import { emailContent } from "./email";
import { classifyEmailContent } from "./models/classifier";
import { draftEmail } from "./models/writer";

export type State = {
  lastUpdated: Date | null;
  messages: Message[];
  autoResponded?: boolean;
};

export type Message = {
  date: Date;
  from: string;
  subject: string;
  user: "sender" | "agent" | "self";
};

export class HelloEmailAgent extends Agent<Env, State> {
  initialState = {
    lastUpdated: null,
    messages: [],
    autoResponded: false,
  };

  async _onEmail(email: AgentEmail) {
    console.log("Received email:", {
      from: email.from,
      subject: email.headers.get("Subject"),
    });

    // Store the email message in the state of the DO.
    this.store(email);

    // Auto-respond only once.
    // if (this.state.autoResponded) {
    //   console.log("Auto-response already sent. Skipping further processing.");
    //   return;
    // }

    const emailContent = await email.getRaw();

    // Agent processing goes here.
    // 1. Classify the email content
    console.log("Classifying email content using our AI model...");
    const classification = await classifyEmailContent(
      emailContent,
      email.from,
      email.headers.get("Subject") || ""
    );
    console.log("Email classification:", classification);

    if (classification.action === "ignore") {
      console.log("Ignoring email as per classification.");
      return;
    }

    if (classification.action === "reply") {
      // Draft a reply using the email writer model.
      console.log("Drafting reply email...");
      const draft = await draftEmail(emailContent);

      console.log("Drafted reply:", draft);

      // Send the drafted reply.
      console.log("Sending drafted reply...");

      await this.handleAutoResponse(email, draft);
      console.log("Reply drafted and sent.");
    }

    // Forward the email to self by default.
    console.log("Forwarding email to self:", this.env.ROUTING_EMAIL);
    await email.forward(this.env.ROUTING_EMAIL);

    console.log("Processing of the incoming email complete.", {
      forwardedTo: this.env.ROUTING_EMAIL,
      emailFrom: email.from,
      emailSubject: email.headers.get("Subject"),
    });
    return;
  }

  // !Private methods
  private async store(email: AgentEmail) {
    const message = await HelloEmailAgent.parseIncomingEmailBody(email);

    this.setState({
      ...this.state,
      lastUpdated: new Date(),
      messages: [...this.state.messages, message],
    });
  }

  private static parseIncomingEmailBody(email: AgentEmail): Message {
    const subject = email.headers.get("Subject") || "(No Subject)";

    return {
      date: new Date(),
      from: email.from,
      subject: subject,
      user: "sender",
    };
  }

  private async handleAutoResponse(
    email: AgentEmail,
    content: string | null = null
  ) {
    // if (this.state.autoResponded) {
    //   console.log("Auto-response already sent. Skipping.");
    //   return;
    // }

    const body = await emailContent(content);

    await this.replyToEmail(email, {
      subject: "Re: " + (email.headers.get("Subject") || "(No Subject)"),
      fromName: "Melek Somai",
      body,
      contentType: "text/html",
    });

    this.setState({
      ...this.state,
      autoResponded: true,
    });

    console.log("Auto-response sent.");
  }
}
