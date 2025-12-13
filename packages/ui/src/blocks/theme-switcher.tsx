"use client";
import {
  ComputerIcon,
  Moon01Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";

const themes = [
  {
    key: "system",
    icon: ComputerIcon,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun01Icon,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon01Icon,
    label: "Dark theme",
  },
];
export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system";
  onChange?: (theme: "light" | "dark" | "system") => void;
  defaultValue?: "light" | "dark" | "system";
  className?: string;
};
export const ThemeSwitcher = ({
  value,
  onChange,
  defaultValue = "system",
  className,
}: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(
    value ?? defaultValue
  );
  const [mounted, setMounted] = useState(false);
  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system") => {
      setTheme(themeKey);
      onChange?.(themeKey);
    },
    [setTheme, onChange]
  );
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      className={cn(
        "relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;
        return (
          <button
            aria-label={label}
            className="relative h-6 w-6 rounded-full"
            key={key}
            onClick={() => handleThemeClick(key as "light" | "dark" | "system")}
            type="button"
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-secondary"
                layoutId="activeTheme"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <HugeiconsIcon
              className={cn(
                "relative m-auto size-4",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
              icon={Icon}
            />
          </button>
        );
      })}
    </div>
  );
};
