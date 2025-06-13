
import { Smartphone, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
                <Smartphone className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Your Conversations?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust our app for their most private communications. Download now and experience true digital privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">4.8/5 Rating</h3>
            <p className="text-gray-300 text-sm">Highly rated by security experts and users alike</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">10M+</div>
            <h3 className="text-lg font-semibold text-white mb-2">Downloads</h3>
            <p className="text-gray-300 text-sm">Trusted by millions worldwide for secure messaging</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
            <p className="text-gray-300 text-sm">Reliable service you can count on 24/7</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-6 h-6 mr-3" />
            Download for Android
          </Button>
          
          <p className="text-gray-400 text-sm">
            Free download • No ads • No tracking • Open source
          </p>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
          <p className="text-gray-300 mb-4">
            iOS version in development. Join our waitlist to be notified when it's available.
          </p>
          <Button 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 rounded-full"
          >
            Join iOS Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
