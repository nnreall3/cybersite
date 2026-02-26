import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, RotateCcw, ChevronRight } from "lucide-react";

const QuizSection = () => {
  const { t } = useI18n();
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);

  const questions = t.quiz.questions;
  const total = questions.length;

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    if (idx === questions[currentQ].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 >= total) {
      setFinished(true);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowExplanation(false);
    setFinished(false);
  };

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const resultMsg = pct >= 80 ? t.quiz.resultGood : pct >= 50 ? t.quiz.resultOk : t.quiz.resultBad;

  return (
    <section id="quiz" className="px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            {t.quiz.sectionTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.quiz.sectionSubtitle}</p>
        </motion.div>

        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {!started && !finished && (
              <motion.div
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-6 py-8"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full hero-gradient">
                  <Zap className="h-10 w-10 text-primary-foreground" />
                </div>
                <button
                  onClick={() => setStarted(true)}
                  className="hero-gradient rounded-2xl px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
                >
                  {t.quiz.startBtn}
                </button>
              </motion.div>
            )}

            {started && !finished && (
              <motion.div
                key={`q-${currentQ}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    {currentQ + 1} {t.quiz.questionOf} {total}
                  </span>
                  <div className="h-2 flex-1 mx-4 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full hero-gradient transition-all duration-500"
                      style={{ width: `${((currentQ + 1) / total) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="mb-6 text-lg font-bold text-foreground">{questions[currentQ].q}</h3>

                <div className="space-y-3">
                  {questions[currentQ].options.map((opt, idx) => {
                    let optClass = "border border-border bg-card hover:bg-secondary";
                    if (selected !== null) {
                      if (idx === questions[currentQ].correct) {
                        optClass = "border-2 border-success bg-success/10";
                      } else if (idx === selected && idx !== questions[currentQ].correct) {
                        optClass = "border-2 border-destructive bg-destructive/10";
                      } else {
                        optClass = "border border-border bg-card opacity-50";
                      }
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={selected !== null}
                        className={`w-full rounded-xl px-4 py-3 text-start text-sm font-medium text-foreground transition-all ${optClass}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-xl bg-secondary p-4 text-sm text-muted-foreground"
                  >
                    {questions[currentQ].explanation}
                  </motion.div>
                )}

                {selected !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 flex justify-end"
                  >
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 hero-gradient rounded-xl px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                    >
                      {currentQ + 1 >= total ? t.quiz.resultTitle : t.quiz.nextBtn}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {finished && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 py-8 text-center"
              >
                <div className="relative h-28 w-28">
                  <svg className="h-28 w-28 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${pct * 2.64} 264`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-foreground">
                    {pct}%
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">{t.quiz.resultTitle}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{resultMsg}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {score}/{total}
                  </p>
                </div>

                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
                >
                  <RotateCcw className="h-4 w-4" />
                  {t.quiz.restartBtn}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
