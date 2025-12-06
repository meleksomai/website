"use client";
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
          <div className="font-mono text-muted-foreground text-sm tracking-wider">
            HEALTH TECHNOLOGIST / 2025
          </div>
          <h1 className="font-light text-5xl tracking-tight sm:text-6xl lg:text-7xl">
            Melek
            <br />
            <span className="text-muted-foreground">Somai</span>
          </h1>
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
            className={`flex gap-2 pt-2 transition-all duration-700 md:pt-4 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                className="border-transparent border-b font-mono text-foreground/60 text-xs transition-all hover:border-foreground/60 hover:text-foreground/90"
                href="/"
                key={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
