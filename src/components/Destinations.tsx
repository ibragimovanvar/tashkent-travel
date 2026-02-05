import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  country: string;
  tours: number;
  image: string;
  description: string;
  gridClass: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Дубай',
    country: 'ОАЭ',
    tours: 45,
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Роскошь Востока',
    gridClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    name: 'Анталия',
    country: 'Турция',
    tours: 67,
    image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Средиземное море',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    name: 'Шарм-эль-Шейх',
    country: 'Египет',
    tours: 38,
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Красное море',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    name: 'Стамбул',
    country: 'Турция',
    tours: 52,
    image: 'https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Город двух континентов',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    name: 'Мальдивы',
    country: 'Мальдивы',
    tours: 24,
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Райские острова',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
];

export default function Destinations() {
  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C81] mb-4">
            Популярные направления
          </h2>
          <p className="text-xl text-gray-600">
            Выбирайте из самых востребованных туристических направлений
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${destination.gridClass} group relative rounded-3xl overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin size={18} className="text-[#FFD700]" />
                    <span className="text-white/80 text-sm">{destination.country}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 text-lg mb-3">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFD700] font-semibold">
                      {destination.tours} туров доступно
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="bg-white/20 backdrop-blur-md p-3 rounded-full group-hover:bg-[#FFD700] transition-colors"
                    >
                      <ArrowRight className="text-white group-hover:text-[#0F4C81]" size={20} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/90 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#FFD700] text-[#0F4C81] py-4 rounded-2xl font-bold text-lg shadow-xl"
                >
                  Смотреть туры
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-[#0F4C81] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0d3e6a] transition-colors"
          >
            <span>Посмотреть все направления</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
