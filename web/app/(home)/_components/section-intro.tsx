"use client";
import { Heading1 } from "@workspace/ui/blocks/headings";
import { useReveal } from "@workspace/ui/hooks/use-reveal";

export default function IntroSection() {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section className="w-full gap-12 sm:gap-16" ref={ref}>
      <div className="space-y-6 sm:space-y-8">
        <div
          className={`mb-6 transition-all duration-700 md:mb-12 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <p className="font-mono text-muted-foreground text-xs uppercase md:text-base">
            / Hi, I AM
          </p>
          <Heading1>
            Melek
            <br />
            <span className="text-muted-foreground">Somai</span>
          </Heading1>
        </div>

        <div
          className={`space-y-3 transition-all duration-700 md:space-y-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-2xl text-muted-foreground leading-relaxed md:text-3xl lg:text-4xl">
            <span className="text-foreground"> Physician</span>.
            <span className="text-foreground"> Clinical Informatician</span>.
            Works at the intersection of{" "}
            <span className="text-foreground">Healthcare Informatics</span>,
            <span className="text-foreground"> Data Science</span>, and
            <span className="text-foreground"> Product Engineering</span>.
          </p>

          <div
            className={`flex gap-4 pt-2 transition-all duration-700 md:pt-4 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {[
              {
                name: "GitHub",
                href: "https://github.com/meleksomai",
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/msomai/",
              },
              {
                name: "Twitter",
                href: "https://twitter.com/meleksomai",
              },
            ].map((social) => (
              <a
                className="border-transparent border-b font-mono text-muted-foreground text-xs transition-all hover:border-foreground/60 hover:text-foreground/90"
                href={social.href}
                key={social.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
