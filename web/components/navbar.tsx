export default function Navbar() {
  const currentSection = 0;

  return (
    <nav className="z-50 flex space-x-6 py-12 transition-opacity duration-700">
      {["Home", "Essays", "Research", "About"].map((item, index) => (
        <button
          className={`group relative cursor-pointer font-medium font-sans text-sm transition-colors ${
            currentSection === index
              ? "text-foreground"
              : "text-foreground/80 hover:text-foreground"
          }`}
          key={item}
          type="button"
        >
          {item}
          <span
            className={`-bottom-1 absolute left-0 h-px bg-foreground transition-all duration-300 ${
              currentSection === index ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
