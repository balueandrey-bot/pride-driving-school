import { User } from "lucide-react";
import { motion } from "framer-motion";

const instructors = [
  {
    name: "Имя",
    title: "Старший инструктор",
    exp: "15 лет стажа",
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Имя",
    title: "Инструктор",
    exp: "8 лет стажа",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    name: "Имя",
    title: "Инструктор",
    exp: "12 лет стажа",
    gradient: "from-purple-500 to-pink-600"
  }
];

export const Instructors = () => {
  return (
    <section id="instructors" className="relative w-full py-16 md:py-24 bg-black text-white overflow-hidden">
      {/* Top Gradient for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent z-[5] pointer-events-none" />

      {/* Background Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-900/10 blur-[50px] md:blur-[100px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[60px] md:blur-[120px] pointer-events-none will-change-transform" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none will-change-transform" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-24 text-white"
        >
          Наши инструкторы
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((inst, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#121212] rounded-[2rem] p-6 pt-0 md:p-8 md:pt-0 relative border border-white/5 flex flex-col items-center mt-12 hover:border-white/10 transition-colors will-change-transform"
            >
              {/* Avatar - Negative margin to pop out */}
              <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${inst.gradient} flex items-center justify-center -mt-12 md:-mt-16 mb-6 md:mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
                <User className="w-10 h-10 md:w-14 md:h-14 text-white" />
              </div>

              <div className="text-center w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{inst.name}</h3>
                <p className="text-brand text-xs md:text-sm font-medium mb-8 md:mb-12 uppercase tracking-wide">{inst.title}</p>
                <div className="w-full h-px bg-white/5 mb-4 md:mb-6" />
                <p className="text-gray-500 text-sm font-medium">{inst.exp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-64 md:h-96 bg-gradient-to-b from-transparent to-black z-[5] pointer-events-none" />
    </section>
  );
};
