import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Heart, Send } from 'lucide-react';

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Главная', href: '#' },
    { id: 'search', icon: Search, label: 'Поиск', href: '#tours' },
    { id: 'saved', icon: Heart, label: 'Избранное', href: '#' },
    { id: 'telegram', icon: Send, label: 'Telegram', href: 'https://t.me/tashkent_travel', external: true },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="relative bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
        <div className="flex justify-around items-center px-4 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isTelegram = item.id === 'telegram';

            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!item.external) {
                    e.preventDefault();
                    setActiveTab(item.id);
                    if (item.href.startsWith('#')) {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                }}
                whileTap={{ scale: 0.9 }}
                className="relative flex flex-col items-center justify-center py-2 px-3 min-w-[64px]"
              >
                {isTelegram ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-8 bg-gradient-to-r from-[#FFD700] to-[#FFC700] p-4 rounded-full shadow-2xl"
                  >
                    <Icon size={24} className="text-[#0F4C81]" />
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        y: isActive ? -2 : 0,
                      }}
                      className={`relative ${
                        isActive ? 'text-[#0F4C81]' : 'text-gray-500'
                      }`}
                    >
                      <Icon size={24} />
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0F4C81] rounded-full"
                        />
                      )}
                    </motion.div>
                    <motion.span
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        fontWeight: isActive ? 600 : 400,
                      }}
                      className={`text-xs mt-1 ${
                        isActive ? 'text-[#0F4C81]' : 'text-gray-500'
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  </>
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
