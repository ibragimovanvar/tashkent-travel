import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] via-blue-600 to-blue-800">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Dunyo bo'ylab sayohat
            <br />
            <span className="text-[#FFD700]">Tashkent Travel</span> bilan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 font-light"
          >
            Откройте мир вместе с нами - Лучшие цены на туры по всему миру
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F4C81]" size={20} />
                <input
                  type="text"
                  placeholder="Куда?"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFD700] focus:outline-none transition-all text-gray-900 font-medium"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F4C81]" size={20} />
                <input
                  type="text"
                  placeholder="Даты"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFD700] focus:outline-none transition-all text-gray-900 font-medium"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F4C81]" size={20} />
                <input
                  type="text"
                  placeholder="Гости"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFD700] focus:outline-none transition-all text-gray-900 font-medium"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-[#0F4C81] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Search size={24} />
                <span>Искать</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {['Дубай', 'Турция', 'Мальдивы', 'Египет', 'ОАЭ'].map((destination, index) => (
            <motion.div
              key={destination}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="backdrop-blur-lg bg-white/20 px-6 py-2 rounded-full text-white font-medium cursor-pointer hover:bg-white/30 transition-all"
            >
              {destination}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white/70 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
