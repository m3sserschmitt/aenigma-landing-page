
import { Shield, Lock, Key, CheckCircle } from "lucide-react";

const Security = () => {
  const securityPoints = [
    "Data encrypted with AES GCM 256 using randomly generated session keys",
    "Session keys encrypted with RSA 4096-bit public keys (envelope encryption)",
    "OpenSSL EVP API for industry-standard cryptographic operations",
    "Encrypted key and data concatenated before transmission",
    "Only recipients with matching private keys can decrypt",
    "Perfect separation between data encryption and key encryption layers"
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-gray-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-8">
              How Our
              <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent"> Envelope Encryption</span>
              <br />Works
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our envelope encryption system uses dual-layer security: your data is encrypted with AES, and the encryption key itself is protected with RSA encryption.
            </p>
            
            <div className="space-y-4 mb-8">
              {securityPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-400">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
              <h4 className="text-lg font-semibold text-gray-300 mb-3">Technical Implementation</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aenigma uses OpenSSL's EVP API for envelope encryption: data is encrypted with AES-256-GCM using a randomly generated session key, then that key is encrypted with RSA 4096-bit public key cryptography. The encrypted key and encrypted data are concatenated into a single payload that leaves your device, ensuring both confidentiality and authenticity.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gray-700/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-500 rounded-full p-3">
                    <Key className="w-6 h-6 text-gray-200" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-300 font-semibold mb-1">1. Generate AES Session Key</h4>
                    <p className="text-gray-400 text-sm">Random 256-bit key generated for data encryption</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-gray-600"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-full p-3">
                    <Shield className="w-6 h-6 text-gray-200" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-300 font-semibold mb-1">2. Encrypt Data with AES GCM</h4>
                    <p className="text-gray-400 text-sm">Message encrypted using AES-256-GCM with session key</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-gray-500"></div>
                </div>
                
                {/* Step 3 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-full p-3">
                    <Lock className="w-6 h-6 text-gray-200" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-300 font-semibold mb-1">3. Encrypt Key with RSA</h4>
                    <p className="text-gray-400 text-sm">Session key encrypted with recipient's RSA 4096-bit public key</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-gray-500"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-full p-3">
                    <Shield className="w-6 h-6 text-gray-200" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-300 font-semibold mb-1">4. Concatenate & Send</h4>
                    <p className="text-gray-400 text-sm">Encrypted key + encrypted data combined into final payload</p>
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
