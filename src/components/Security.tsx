
import { Shield, Lock, Key, CheckCircle } from "lucide-react";

const Security = () => {
  const securityPoints = [
    "Messages encrypted with AES GCM 256 before leaving your device",
    "RSA 4096-bit keys for secure key exchange and authentication",
    "OpenSSL EVP API for industry-standard cryptographic operations",
    "Only you and recipient have the decryption keys",
    "No servers can read your conversations",
    "Regular security audits by experts"
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              How Our
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Encryption</span>
              <br />Works
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our end-to-end encryption ensures that only you and your intended recipients can read your messages. Not even we can access your conversations.
            </p>
            
            <div className="space-y-4 mb-8">
              {securityPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">Technical Details</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Aenigma uses OpenSSL's EVP (Envelope) API with AES-256-GCM for symmetric encryption and RSA 4096-bit keys for asymmetric operations. This combination provides authenticated encryption with associated data (AEAD) ensuring both confidentiality and integrity of your messages.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-3">
                    <Key className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">1. RSA Key Exchange</h4>
                    <p className="text-gray-300 text-sm">4096-bit RSA keys securely exchange AES session keys</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">2. AES GCM Encryption</h4>
                    <p className="text-gray-300 text-sm">Message encrypted with AES-256-GCM using OpenSSL EVP</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-pink-500 to-green-500"></div>
                </div>
                
                {/* Step 3 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">3. Authenticated Delivery</h4>
                    <p className="text-gray-300 text-sm">GCM mode ensures integrity and authenticity verification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
