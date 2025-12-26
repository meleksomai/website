import { Agent, type AgentEmail } from "agents";

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
    await this.handleAutoResponse(email);

    // Agent processing goes here.

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

  private async handleAutoResponse(email: AgentEmail) {
    if (this.state.autoResponded) {
      console.log("Auto-response already sent. Skipping.");
      return;
    }

    await this.replyToEmail(email, {
      subject: "Re: " + (email.headers.get("Subject") || "(No Subject)"),
      fromName: "Melek Somai",
      body: `Hello,`,
      contentType: "text/plain",
    });

    this.setState({
      ...this.state,
      autoResponded: true,
    });

    console.log("Auto-response sent.");
  }
}
