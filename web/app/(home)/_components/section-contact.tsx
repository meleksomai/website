"use client";

import { Heading2 } from "@workspace/ui/blocks/headings";
import { MailIcon } from "@workspace/ui/components/icons";
import { useReveal } from "@workspace/ui/hooks/use-reveal";

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section className="flex shrink-0 snap-start items-center" ref={ref}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-center">
          <div
            className={`mb-6 transition-all duration-700 md:mb-12 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <Heading2>Let's talk</Heading2>
            <p className="font-mono text-muted-foreground text-xs uppercase md:text-base">
              / Get in touch
            </p>
          </div>

          <div className="space-y-4 md:space-y-8">
            <a
              className={`group block transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              href="mailto:hello@somai.me"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="mb-1 flex items-center gap-2">
                <MailIcon className="h-3 w-3 text-muted-foreground" />
                <span className="font-mono text-muted-foreground text-xs">
                  Email
                </span>
              </div>
              <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                hello@somai.me
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
