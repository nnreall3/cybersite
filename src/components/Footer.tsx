import { useI18n } from "@/lib/i18n";
import { Shield } from "lucide-react";

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 text-foreground font-bold">
          <Shield className="h-5 w-5 text-primary" />
          {t.nav.title}
        </div>
        <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        <p className="text-xs text-muted-foreground">
          © {year} {t.nav.title}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
