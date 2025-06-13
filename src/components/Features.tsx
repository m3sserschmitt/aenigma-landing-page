
import { Shield, Zap, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Envelope Encryption",
      description: "Advanced dual-layer encryption: AES GCM 256 encrypts your data, while RSA 4096-bit keys protect the encryption keys themselves through OpenSSL EVP API.",
      color: "from-gray-600 to-gray-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized OpenSSL EVP implementation ensures your encrypted messages are delivered instantly without compromising on security.",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Users,
      title: "Group Encryption",
      description: "Secure group chats with up to 1000 participants, all protected with the same level of envelope encryption using individual RSA key pairs.",
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
            Advanced Security
            <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every feature is designed with security and privacy at its core, ensuring your communications remain truly private.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-700/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:bg-gray-700/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-gray-700/30 backdrop-blur-sm p-4 rounded-full w-fit">
                  <feature.icon className="w-8 h-8 text-gray-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-300 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-400 group-hover:to-gray-500 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
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
