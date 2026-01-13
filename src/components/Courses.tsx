import { Check } from "lucide-react";

const featuresBasic = [
  "Теория онлайн или в классе",
  "Практика: 54/56 часов",
  "Сопровождение в ГИБДД",
  "ГСМ включен",
  "Выбор инструктора"
];

const featuresVIP = [
  "Всё, что в Базовом",
  "Индивидуальный график",
  "Автомобиль премиум-класса",
  "Занятия в любое время",
  "Персональный менеджер",
  "Доп. часы вождения"
];

export const Courses = () => {
  return (
    <section className="relative w-full pt-20 pb-32 bg-black text-white overflow-hidden">
      {/* Top Gradient for smooth transition from Hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[5] pointer-events-none" />

      {/* Background Blurs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Bottom transition blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Курсы</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Basic Course */}
          <div className="rounded-3xl bg-[#0F0F11] p-10 flex flex-col border border-white/10 shadow-lg hover:border-white/20 transition-colors">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Базовый</h3>
              <p className="text-gray-400 text-sm">Идеальный старт для уверенного вождения</p>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">35 000 ₽</span>
              <span className="text-gray-500 ml-2 text-lg">/ курс</span>
            </div>

            <ul className="space-y-5 mb-8 flex-grow">
              {featuresBasic.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white/50" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Course */}
          <div className="rounded-3xl bg-[#0F0F11] p-10 flex flex-col border border-brand shadow-[0_0_50px_rgba(228,84,0,0.3)] relative">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">VIP</h3>
              <p className="text-gray-400 text-sm">Максимальный комфорт и гарантия результата</p>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-brand">55 000 ₽</span>
              <span className="text-gray-500 ml-2 text-lg">/ курс</span>
            </div>

            <ul className="space-y-5 mb-8 flex-grow">
              {featuresVIP.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent to-black z-[5] pointer-events-none" />
    </section>
  );
};
