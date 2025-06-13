
import { Shield, Lock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 via-gray-500/20 to-gray-700/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <div className="relative bg-gray-700/30 backdrop-blur-sm p-6 rounded-full border border-gray-600/30">
              <Shield className="w-16 h-16 text-gray-300" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-300 mb-6 leading-tight">
          Secure
          <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent"> Communications</span>
          <br />Made Simple
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience true privacy with military-grade envelope encryption. Your conversations stay between you and your contacts—no one else can read them.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-gray-200 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Download Aenigma
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600/50 text-gray-300 hover:bg-gray-700/20 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Lock className="w-5 h-5 mr-2" />
            Learn About Security
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 hover:bg-gray-700/30 transition-all duration-300">
            <Shield className="w-8 h-8 text-gray-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Envelope Encrypted</h3>
            <p className="text-gray-400 text-sm">Dual-layer encryption with AES GCM 256 and RSA 4096</p>
          </div>
          
          <div className="bg-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 hover:bg-gray-700/30 transition-all duration-300">
            <Lock className="w-8 h-8 text-gray-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Zero Knowledge</h3>
            <p className="text-gray-400 text-sm">We can't read your messages even if we wanted to</p>
          </div>
          
          <div className="bg-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 hover:bg-gray-700/30 transition-all duration-300">
            <MessageCircle className="w-8 h-8 text-gray-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Android Exclusive</h3>
            <p className="text-gray-400 text-sm">Optimized specifically for Android devices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
