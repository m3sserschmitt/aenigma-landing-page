
import { Shield, Zap, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "AES GCM 256 Encryption",
      description: "Advanced Encryption Standard with Galois/Counter Mode provides authenticated encryption for maximum security and data integrity.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized OpenSSL EVP API implementation ensures your encrypted messages are delivered instantly without compromising on security.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Group Encryption",
      description: "Secure group chats with up to 1000 participants, all protected with the same level of end-to-end encryption using RSA 4096-bit keys.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Security
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature is designed with security and privacy at its core, ensuring your communications remain truly private.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
