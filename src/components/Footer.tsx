import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Services', page: 'services' as Page },
    { label: 'Testimonials', page: 'testimonials' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ];

  const services = [
    'AI ChatBot Setup & Training',
    'Dedicated VA Support',
    'GHL Setup 360',
  ];

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mevan AI
              </span>
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Drive growth, retain customers, and scale up effortlessly with Mevan AI.
            </p>
            <a
              href="mailto:info@mevan.ai"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              info@mevan.ai
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h3 className="text-white font-semibold mb-4">What We Offer</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <span>London, UK</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <a href="tel:+923165511771" className="hover:text-blue-400 transition-colors">
                  +923165511771
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <a href="mailto:info@mevan.ai" className="hover:text-blue-400 transition-colors">
                  info@mevan.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center text-gray-400">
            <p>© Copyright Mevan. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </footer>
  );
}