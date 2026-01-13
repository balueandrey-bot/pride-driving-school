import { Image } from "lucide-react";

const reviewCards = [
  { bg: "bg-[#1f0d16]", border: "border-red-900/20" },
  { bg: "bg-[#0d1f18]", border: "border-green-900/20" },
  { bg: "bg-[#0d121f]", border: "border-blue-900/20" },
  { bg: "bg-[#0d1f12]", border: "border-emerald-900/20" },
  { bg: "bg-[#160d1f]", border: "border-purple-900/20" },
  { bg: "bg-[#1f160d]", border: "border-orange-900/20" },
];

const extendedCards = [...reviewCards, ...reviewCards, ...reviewCards, ...reviewCards];

export const Reviews = () => {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Top Gradient for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">Отзывы</h2>
        </div>

        {/* Auto-scrolling Carousel - Full Width */}
        <div className="w-full overflow-hidden pb-8">
          <div className="flex gap-6 animate-scroll w-max hover:[animation-play-state:paused]">
            {extendedCards.map((card, idx) => (
              <div 
                key={idx} 
                className={`min-w-[200px] h-[280px] md:min-w-[240px] md:h-[320px] rounded-2xl ${card.bg} border ${card.border} flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-300`}
              >
                <Image className="w-12 h-12 text-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Big Blue CTA Block */}
        <div className="container mx-auto px-4 mt-8 relative z-30">
          <div className="max-w-4xl mx-auto">
            <div className="w-full h-[300px] rounded-[3rem] bg-gradient-to-br from-[#00b4fc] to-[#007cf0] flex items-center justify-center shadow-[0_0_100px_rgba(0,180,252,0.15)] relative overflow-hidden group cursor-pointer hover:shadow-[0_0_120px_rgba(0,180,252,0.3)] transition-all duration-500">
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-4xl md:text-5xl font-bold text-white relative z-10">Отзывы</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
    </section>
  );
};
