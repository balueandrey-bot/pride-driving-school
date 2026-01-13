
export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#050505] text-white overflow-hidden">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Large Lion Background (Right Side) */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[1400px] h-[1400px] opacity-100 pointer-events-none select-none z-0">
        <img 
          src="/images/logo.svg" 
          alt="Lion Background" 
          className="w-full h-full object-contain opacity-40"
          style={{
            maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-start justify-center h-full pt-20">
        
        {/* Main Text Content */}
        <div className="flex flex-col items-start">
          <h2 className="text-4xl md:text-6xl font-bold text-brand tracking-wide">
            Школа вождения
          </h2>
          <h1 className="text-5xl md:text-[8rem] font-russo leading-none uppercase tracking-wider text-white mt-4 md:mt-8 drop-shadow-2xl">
            ПРАЙД
          </h1>
          <p className="text-xl md:text-[1.99rem] font-bold text-white/90 mt-6 tracking-wide">
            Мастерство начинается здесь!
          </p>
        </div>

        {/* CTA Button */}
        <button className="relative z-30 mt-12 group px-10 py-5 bg-brand rounded-full font-bold text-lg md:text-xl text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(228,84,0,0.4)]">
          <span className="relative z-10">Записаться на курс</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>

      </div>
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
    </section>
  );
};
