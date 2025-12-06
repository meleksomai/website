"use client";
import { useReveal } from "@workspace/ui/hooks/use-reveal";

export function EssaySection() {
  const { ref, isVisible } = useReveal(0.7);

  return (
    <section
      className="flex shrink-0 snap-start items-center pt-20 md:pt-0"
      ref={ref}
    >
      <div className="mx-auto w-full">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-light font-sans text-4xl text-foreground tracking-tight md:text-5xl lg:text-6xl">
            Essays
          </h2>
          <p className="font-mono text-muted-foreground text-sm uppercase tracking-wider">
            / A space to share thoughts and ideas that are often reflections on
            my current research.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Digital Healthcare Innovation",
              category: "Digital Health",
              year: "2024",
              direction: "left",
            },
            {
              number: "02",
              title: "On the Game Theory of Innovation in Healthcare",
              category: "Digital Health",
              year: "2024",
              direction: "left",
            },
            {
              number: "03",
              title: "A Case for Universal Healthcare in Tunisia",
              category: "Global Health",
              year: "2023",
              direction: "left",
            },
          ].map((project, i) => (
            <ProjectCard
              index={i}
              isVisible={isVisible}
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: {
    number: string;
    title: string;
    category: string;
    year: string;
    direction: string;
  };
  index: number;
  isVisible: boolean;
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left"
        ? "-translate-x-16 opacity-0"
        : "translate-x-16 opacity-0";
    }
    return "translate-x-0 opacity-100";
  };

  return (
    <div
      className={`group flex cursor-pointer items-center justify-between border-foreground/10 border-b py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-foreground/30 text-sm transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mr-12 mb-1 font-light font-sans text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-foreground/50 text-xs md:text-sm">
            {project.category}
          </p>
        </div>
      </div>
      <span className="font-mono text-foreground/30 text-xs md:text-sm">
        {project.year}
      </span>
    </div>
  );
}
