"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ className }: { className?: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the page
    const headings = document.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      items.push({
        id: heading.id,
        text: heading.textContent || "",
        level: Number.parseInt(heading.tagName.substring(1)),
      });
    });

    setToc(items);

    // Track active heading on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  return (
    <nav
      className={`hidden xl:block fixed top-1/5 w-56 max-h-[70vh] overflow-y-auto ${className}`}
    >
      <div className="space-y-1">
        <div className="text-xs uppercase tracking-wider text-foreground/40 mb-4 font-sans">
          On this essay
        </div>
        {toc.map((item) => (
          <a
            className={`block text-sm transition-colors ${
              activeId === item.id
                ? "text-foreground"
                : "text-foreground/50 hover:text-foreground/80"
            }`}
            href={`#${item.id}`}
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 0.75}rem` }}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
