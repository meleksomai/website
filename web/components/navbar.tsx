import Link from "next/link";

export default function Navbar() {
  const currentSection = 45;

  return (
    <nav className="z-50 flex items-baseline space-x-6 py-12 transition-opacity duration-700">
      <div>
        <div className="font-mono">
          melek<span className="text-muted-foreground">somai </span>
        </div>
      </div>
      {[
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Essays",
          href: "/essays",
        },
        {
          title: "Research",
          href: "/research",
        },
        {
          title: "About",
          href: "/about",
        },
      ].map((item, index) => (
        <Link
          className={`group relative cursor-pointer font-medium font-sans text-sm transition-colors ${
            currentSection === index
              ? "text-foreground"
              : "text-foreground/80 hover:text-foreground"
          }`}
          href={item.href}
          key={item.title}
        >
          {item.title}
          <span
            className={`-bottom-1 absolute left-0 h-px bg-foreground transition-all duration-300 ${
              currentSection === index ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
}
