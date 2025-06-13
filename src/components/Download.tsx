
import { Smartphone, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <div className="relative bg-gray-700/30 backdrop-blur-sm p-6 rounded-full border border-gray-600/30">
                <Smartphone className="w-16 h-16 text-gray-300" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
            Ready to Secure
            <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent"> Your Conversations?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Aenigma for their most private communications. Download now and experience true digital privacy on Android.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">4.8/5 Rating</h3>
            <p className="text-gray-400 text-sm">Highly rated by security experts and users alike</p>
          </div>
          
          <div className="bg-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            <div className="text-3xl font-bold text-gray-300 mb-2">OpenSSL</div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Powered</h3>
            <p className="text-gray-400 text-sm">Built on industry-standard cryptographic libraries</p>
          </div>
          
          <div className="bg-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            <div className="text-3xl font-bold text-gray-300 mb-2">99.9%</div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Uptime</h3>
            <p className="text-gray-400 text-sm">Reliable service you can count on 24/7</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-gray-200 px-12 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-6 h-6 mr-3" />
            Download Aenigma
          </Button>
          
          <p className="text-gray-500 text-sm">
            Free download • No ads • No tracking • Android exclusive
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
