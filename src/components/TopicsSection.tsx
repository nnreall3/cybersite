import { useI18n } from "@/lib/i18n";
import TopicCard from "./TopicCard";
import { motion } from "framer-motion";
import { MessageSquareWarning, Fingerprint, ShieldAlert, KeyRound } from "lucide-react";

const TopicsSection = () => {
  const { t } = useI18n();

  const topics = [
    {
      icon: MessageSquareWarning,
      ...t.topics.socialMedia,
      color: "hero-gradient",
    },
    {
      icon: ShieldAlert,
      ...t.topics.phishing,
      color: "bg-destructive",
    },
    {
      icon: Fingerprint,
      ...t.topics.privacy,
      color: "bg-success",
    },
    {
      icon: KeyRound,
      ...t.topics.hygiene,
      color: "bg-warning",
    },
  ];

  return (
    <section id="topics" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            {t.topics.sectionTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.topics.sectionSubtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic, i) => (
            <TopicCard key={i} index={i} {...topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
