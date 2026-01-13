import { Phone, Moon } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        {/* Main Navigation Container */}
        <div className="flex items-center gap-8">
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors">
              Курсы
            </a>
            <a href="#" className="text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors">
              Инструкторы
            </a>
          </nav>

          {/* Theme Toggle */}
          <button className="group w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
            <Moon className="w-5 h-5 text-white group-hover:text-brand transition-colors" />
          </button>

          {/* Center Logo Container (Placeholder to keep spacing) */}
          <div className="w-16 h-16 shrink-0 relative">
             <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300 z-50">
                <img src="/images/logo.svg" alt="PRIDE Logo" className="w-full h-full object-contain" />
             </div>
          </div>

          {/* Phone Button */}
          <a 
            href="tel:+79991234567" 
            className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] shrink-0"
          >
            <Phone className="w-4 h-4 text-white fill-current" />
            <span className="text-sm font-bold text-white">+7 (999) 123-45-67</span>
          </a>

           {/* Right Navigation Link */}
           <a href="#" className="text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors">
              Отзывы
            </a>
        </div>
      </div>
    </header>
  );
};
