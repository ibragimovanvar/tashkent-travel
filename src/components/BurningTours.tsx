import { motion } from 'framer-motion';
import { Flame, Plane, Shield, Star, Send } from 'lucide-react';
import { useRef } from 'react';

interface Tour {
  id: number;
  destination: string;
  country: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  badges: string[];
}

const tours: Tour[] = [
  {
    id: 1,
    destination: 'Анталия',
    country: 'Турция',
    price: 550,
    originalPrice: 750,
    image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 342,
    duration: '7 ночей',
    badges: ['All Inclusive', 'Прямой рейс'],
  },
  {
    id: 2,
    destination: 'Дубай',
    country: 'ОАЭ',
    price: 400,
    originalPrice: 600,
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 567,
    duration: '5 ночей',
    badges: ['Безвиз', 'Прямой рейс'],
  },
  {
    id: 3,
    destination: 'Шарм-эль-Шейх',
    country: 'Египет',
    price: 450,
    originalPrice: 650,
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 289,
    duration: '7 ночей',
    badges: ['All Inclusive', 'Безвиз'],
  },
  {
    id: 4,
    destination: 'Мальдивы',
    country: 'Мальдивы',
    price: 1200,
    originalPrice: 1600,
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5.0,
    reviews: 198,
    duration: '6 ночей',
    badges: ['Люкс', 'Все включено'],
  },
  {
    id: 5,
    destination: 'Стамбул',
    country: 'Турция',
    price: 350,
    originalPrice: 500,
    image: 'https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 423,
    duration: '4 ночи',
    badges: ['Прямой рейс'],
  },
];

export default function BurningTours() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="hot-deals" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full mb-4">
            <Flame className="animate-pulse" size={24} />
            <span className="font-bold text-lg">ГОРЯЩИЕ ТУРЫ</span>
            <Flame className="animate-pulse" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C81] mb-4">
            Лучшие предложения недели
          </h2>
          <p className="text-xl text-gray-600">
            Успейте забронировать по специальной цене - ограниченное количество мест!
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-white transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.destination}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg"
                      >
                        <Flame size={18} />
                        <span className="font-bold">-{Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}%</span>
                      </motion.div>
                    </div>

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {tour.badges.map((badge) => (
                        <div
                          key={badge}
                          className="backdrop-blur-md bg-white/90 text-[#0F4C81] px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                        >
                          {badge === 'Прямой рейс' && <Plane size={12} />}
                          {badge === 'Безвиз' && <Shield size={12} />}
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold">{tour.destination}</h3>
                        <p className="text-sm text-white/80">{tour.country} • {tour.duration}</p>
                      </div>
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <Star size={14} fill="#FFD700" stroke="#FFD700" />
                        <span className="text-sm font-bold text-gray-900">{tour.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500 line-through">${tour.originalPrice}</p>
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-[#0F4C81]">${tour.price}</span>
                          <span className="text-gray-600 ml-2">на человека</span>
                        </div>
                      </div>
                    </div>

                    <motion.a
                      href="https://t.me/tashkent_travel"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-[#0F4C81] py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send size={20} />
                      <span>Забронировать в Telegram</span>
                    </motion.a>

                    <p className="text-center text-xs text-gray-500 mt-3">
                      {tour.reviews} отзывов • Осталось 3 места
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-white transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
