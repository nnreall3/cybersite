import { useI18n } from "@/lib/i18n";
import { languageNames, Language } from "@/lib/translations";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { Shield } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.topics, href: "#topics" },
    { label: t.nav.quiz, href: "#quiz" },
  ];

  return (
    <nav className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Shield className="h-6 w-6 text-primary" />
          {t.nav.title}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass-card mx-4 mb-4 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <div className="flex flex-wrap gap-1">
                {(["en", "ar", "darija"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileOpen(false); }}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      l === lang ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {languageNames[l]}
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
