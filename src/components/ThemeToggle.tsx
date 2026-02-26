import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("cybershield-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("cybershield-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((d) => !d) };
};

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();
  const { t } = useI18n();

  return (
    <button
      onClick={toggle}
      className="relative flex h-8 w-14 items-center rounded-full bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={isDark ? t.theme.light : t.theme.dark}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground shadow-md transition-transform duration-300 ${
          isDark ? "ltr:translate-x-7 rtl:-translate-x-7" : "ltr:translate-x-1 rtl:-translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-foreground" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-foreground" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
