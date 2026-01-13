import { User } from "lucide-react";

const instructors = [
  {
    name: "Алексей Смирнов",
    title: "Старший инструктор",
    exp: "15 лет стажа",
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Елена Волкова",
    title: "Инструктор АКПП",
    exp: "8 лет стажа",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    name: "Дмитрий Козлов",
    title: "Инструктор МКПП",
    exp: "12 лет стажа",
    gradient: "from-purple-500 to-pink-600"
  }
];

export const Instructors = () => {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Top Gradient for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

      {/* Background Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-24 text-white">Наши инструкторы</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-30">
          {instructors.map((inst, idx) => (
            <div key={idx} className="bg-[#121212] rounded-[2rem] p-8 pt-0 relative border border-white/5 flex flex-col items-center mt-12 hover:border-white/10 transition-colors">
              {/* Avatar - Negative margin to pop out */}
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${inst.gradient} flex items-center justify-center -mt-16 mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
                <User className="w-14 h-14 text-white" />
              </div>

              <div className="text-center w-full">
                <h3 className="text-2xl font-bold text-white mb-2">{inst.name}</h3>
                <p className="text-brand text-sm font-medium mb-12 uppercase tracking-wide">{inst.title}</p>
                <div className="w-full h-px bg-white/5 mb-6" />
                <p className="text-gray-500 text-sm font-medium">{inst.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
    </section>
  );
};
