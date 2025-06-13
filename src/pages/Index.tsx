
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <Security />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
