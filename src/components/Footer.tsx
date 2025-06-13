
import { Shield, Twitter, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SecureChat</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The world's most secure messaging app, built with privacy at its core. Your conversations, protected by military-grade encryption.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 hover:bg-white/10 rounded-full p-3 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 rounded-full p-3 transition-colors duration-300">
                <Github className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 rounded-full p-3 transition-colors duration-300">
                <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Security */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Security</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">Security Whitepaper <ExternalLink className="w-4 h-4 ml-1" /></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Encryption Details</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Security Audits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Bug Bounty</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h5 className="text-white font-semibold mb-2">Open Source</h5>
              <p className="text-gray-300 text-sm">Our encryption code is publicly auditable on GitHub</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h5 className="text-white font-semibold mb-2">No Data Collection</h5>
              <p className="text-gray-300 text-sm">We don't collect, store, or analyze your personal data</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h5 className="text-white font-semibold mb-2">Independently Audited</h5>
              <p className="text-gray-300 text-sm">Regular security audits by leading cybersecurity firms</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SecureChat. All rights reserved. Built with privacy and security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
