import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopicsSection from "@/components/TopicsSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TopicsSection />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;
