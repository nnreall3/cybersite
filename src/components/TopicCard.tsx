import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ChevronDown, CheckCircle2, LucideIcon } from "lucide-react";

type TopicCardProps = {
  icon: LucideIcon;
  title: string;
  summary: string;
  tips: string[];
  index: number;
  color: string;
};

const TopicCard = ({ icon: Icon, title, summary, tips, index, color }: TopicCardProps) => {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color}`}>
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{summary}</p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {expanded ? t.topics.collapse : t.topics.readMore}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-3 border-t border-border pt-4">
            {tips.map((tip, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={expanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex gap-3 text-sm leading-relaxed text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{tip}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Progress bar at bottom */}
      <div className="h-1 w-full bg-secondary">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: expanded ? "100%" : "25%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
      </div>
    </motion.div>
  );
};

export default TopicCard;
