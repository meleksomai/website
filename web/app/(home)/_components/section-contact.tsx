"use client";

import { useReveal } from "@workspace/ui/hooks/use-reveal";
import { Mail, MapPin } from "lucide-react";

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
            <h2 className="mb-2 font-light font-sans text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
              Let's talk
            </h2>
            <p className="font-mono text-foreground/60 text-xs uppercase md:text-base">
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
                <Mail className="h-3 w-3 text-foreground/60" />
                <span className="font-mono text-foreground/60 text-xs">
                  Email
                </span>
              </div>
              <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                hello@somai.me
              </p>
            </a>

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="mb-1 flex items-center gap-2">
                <MapPin className="h-3 w-3 text-foreground/60" />
                <span className="font-mono text-foreground/60 text-xs">
                  Location
                </span>
              </div>
              <p className="text-base text-foreground md:text-2xl">
                New York, NY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
