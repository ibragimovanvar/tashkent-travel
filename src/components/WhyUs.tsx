import { motion } from 'framer-motion';
import { Shield, Clock, Award, FileText, Users, HeartHandshake } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <Clock size={40} />,
    title: 'Поддержка 24/7',
    description: 'Мы всегда на связи - звоните или пишите в любое время',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Award size={40} />,
    title: 'Офис в Ташкенте',
    description: 'Работаем официально с 2015 года, всегда рады встрече',
    color: 'from-[#FFD700] to-yellow-500',
  },
  {
    icon: <Shield size={40} />,
    title: 'Гарантия лучшей цены',
    description: 'Нашли дешевле? Вернем разницу и дадим скидку 5%',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FileText size={40} />,
    title: 'Помощь с визами',
    description: 'Оформим все документы быстро и без лишних хлопот',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Users size={40} />,
    title: '15,000+ клиентов',
    description: 'Тысячи довольных туристов рекомендуют нас',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <HeartHandshake size={40} />,
    title: 'Индивидуальный подход',
    description: 'Подберем тур под ваши предпочтения и бюджет',
    color: 'from-teal-500 to-blue-500',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C81] mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600">
            Мы заботимся о каждом клиенте и предлагаем лучший сервис на рынке
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-[#0F4C81] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 relative"
        >
          <div className="relative bg-gradient-to-r from-[#0F4C81] to-[#0d3e6a] rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Готовы к путешествию мечты?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Свяжитесь с нами прямо сейчас и получите персональное предложение
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="tel:+998946560036"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 bg-[#FFD700] text-[#0F4C81] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <Clock size={24} />
                  <span>Позвонить сейчас</span>
                </motion.a>

                <motion.a
                  href="https://t.me/travelbook_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-lg text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.093.036.306.02.472z"/>
                  </svg>
                  <span>Написать в Telegram</span>
                </motion.a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-white/70 mt-6 text-sm"
              >
                +998 94 656 00 36 • info@tashkent.travel • Ежедневно с 9:00 до 21:00
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
