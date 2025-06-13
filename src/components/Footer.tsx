
import { Shield, Twitter, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-gray-600/30 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg p-2">
                <Shield className="w-8 h-8 text-gray-200" />
              </div>
              <span className="text-2xl font-bold text-gray-300">Aenigma</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The most secure Android messaging app, built with privacy at its core using OpenSSL EVP API with envelope encryption combining AES GCM 256 and RSA 4096-bit keys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700/30 hover:bg-gray-700/50 rounded-full p-3 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" className="bg-gray-700/30 hover:bg-gray-700/50 rounded-full p-3 transition-colors duration-300">
                <Github className="w-5 h-5 text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" className="bg-gray-700/30 hover:bg-gray-700/50 rounded-full p-3 transition-colors duration-300">
                <Mail className="w-5 h-5 text-gray-400 hover:text-gray-300" />
              </a>
            </div>
          </div>
          
          {/* Security */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-6">Security</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 flex items-center">Security Whitepaper <ExternalLink className="w-4 h-4 ml-1" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Encryption Details</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Envelope Encryption</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Bug Bounty</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="border-t border-gray-600/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30">
              <h5 className="text-gray-300 font-semibold mb-2">OpenSSL Powered</h5>
              <p className="text-gray-400 text-sm">Built on industry-standard cryptographic libraries used worldwide</p>
            </div>
            <div className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30">
              <h5 className="text-gray-300 font-semibold mb-2">No Data Collection</h5>
              <p className="text-gray-400 text-sm">We don't collect, store, or analyze your personal data</p>
            </div>
            <div className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30">
              <h5 className="text-gray-300 font-semibold mb-2">Android Exclusive</h5>
              <p className="text-gray-400 text-sm">Optimized specifically for Android devices and security</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600/30 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Aenigma. All rights reserved. Built with privacy and security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
