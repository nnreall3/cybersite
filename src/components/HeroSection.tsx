import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-gradient absolute -top-40 -end-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl animate-float" />
        <div className="hero-gradient absolute -bottom-40 -start-40 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
        >
          <ShieldCheck className="h-4 w-4" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          <span className="text-gradient">{t.hero.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#topics"
            className="hero-gradient inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            {t.hero.cta}
          </a>
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-105"
          >
            {t.hero.ctaQuiz}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <ArrowDown className="mx-auto h-5 w-5 animate-bounce text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
