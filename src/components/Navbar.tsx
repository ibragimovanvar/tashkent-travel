import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'RU' | 'UZ'>('RU');

  const navLinks = [
    { label: language === 'RU' ? 'Туры' : "To'rlar", href: '#tours' },
    { label: language === 'RU' ? 'Визы' : 'Vizalar', href: '#visas' },
    { label: language === 'RU' ? 'Горящие туры' : "Hot to'rlar", href: '#hot-deals' },
    { label: language === 'RU' ? 'О нас' : 'Biz haqimizda', href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="text-2xl md:text-3xl font-bold text-[#0F4C81]">
              TASHKENT
              <span className="text-[#FFD700]"> TRAVEL</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.05, color: '#FFD700' }}
                className="text-gray-700 font-medium transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('RU')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'RU'
                    ? 'bg-[#0F4C81] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('UZ')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'UZ'
                    ? 'bg-[#0F4C81] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                UZ
              </button>
            </div>

            <motion.a
              href="tel:+998946560036"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-[#FFD700] text-[#0F4C81] px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              <Phone size={20} />
              <span className="hidden xl:inline">+998 94 656 00 36</span>
              <span className="xl:hidden">{language === 'RU' ? 'Позвонить' : "Qo'ng'iroq"}</span>
            </motion.a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex justify-between items-center pt-3 border-t">
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setLanguage('RU')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      language === 'RU'
                        ? 'bg-[#0F4C81] text-white'
                        : 'text-gray-600'
                    }`}
                  >
                    RU
                  </button>
                  <button
                    onClick={() => setLanguage('UZ')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      language === 'UZ'
                        ? 'bg-[#0F4C81] text-white'
                        : 'text-gray-600'
                    }`}
                  >
                    UZ
                  </button>
                </div>
                <a
                  href="tel:+998946560036"
                  className="flex items-center space-x-2 bg-[#FFD700] text-[#0F4C81] px-4 py-2 rounded-full font-bold"
                >
                  <Phone size={18} />
                  <span>{language === 'RU' ? 'Позвонить' : "Qo'ng'iroq"}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
