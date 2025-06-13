
import { Shield, Lock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
              <Shield className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Secure
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Communications</span>
          <br />Made Simple
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience true privacy with military-grade end-to-end encryption. Your conversations stay between you and your contacts—no one else can read them.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Download Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Lock className="w-5 h-5 mr-2" />
            Learn About Security
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Shield className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">End-to-End Encrypted</h3>
            <p className="text-gray-300 text-sm">Every message is encrypted on your device before sending</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Lock className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">Zero Knowledge</h3>
            <p className="text-gray-300 text-sm">We can't read your messages even if we wanted to</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <MessageCircle className="w-8 h-8 text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">Private by Design</h3>
            <p className="text-gray-300 text-sm">Built from the ground up with privacy in mind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
