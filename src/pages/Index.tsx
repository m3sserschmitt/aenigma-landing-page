
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800" style={{backgroundColor: '#212121'}}>
      <Hero />
      <Features />
      <Security />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
