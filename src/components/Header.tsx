import { Phone, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 md:bg-black/90 backdrop-blur-none md:backdrop-blur-sm border-b border-white/10 h-20"
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
          
          {/* Mobile Menu Button (Left) */}
          <button 
            className="md:hidden absolute left-4 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors z-20"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

           {/* Mobile Phone Button (Right) */}
           <a 
              href="tel:+79991234567" 
              className="md:hidden absolute right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] shrink-0 z-20"
            >
              <Phone className="w-4 h-4 text-white fill-current" />
              <span className="text-xs font-bold text-white">+7 (999) 123-45-67</span>
            </a>

          {/* Main Navigation Container */}
          <div className="flex items-center gap-2 md:gap-8">
            {/* Left Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors">
                Курсы
              </a>
              <a href="#instructors" className="text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors">
                Инструкторы
              </a>
            </nav>

            {/* Theme Toggle */}
            <button className="hidden md:flex group w-10 h-10 rounded-full bg-zinc-800 items-center justify-center hover:bg-zinc-700 transition-colors">
              <Moon className="w-5 h-5 text-white group-hover:text-brand transition-colors" />
            </button>

            {/* Center Logo Container */}
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 relative">
               <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300 z-50">
                  <img src="images/logo.svg" alt="PRIDE Logo" className="w-full h-full object-contain" />
               </div>
            </div>

            {/* Phone Button - Desktop */}
            <a 
              href="tel:+79991234567" 
              className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] shrink-0"
            >
              <Phone className="w-4 h-4 text-white fill-current" />
              <span className="text-sm font-bold text-white">+7 (999) 123-45-67</span>
            </a>

             {/* Right Navigation Link */}
             <a href="#reviews" className="hidden md:block text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors">
                Отзывы
              </a>
              
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-black flex flex-col md:hidden"
              style={{ backgroundColor: '#000000', height: '100dvh' }}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-xl font-bold text-white">Меню</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center active:scale-95 transition-all"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
                <div className="w-40 h-40 flex items-center justify-center mb-4">
                  <img src="images/logo.svg" alt="PRIDE Logo" className="w-full h-full object-contain" />
                </div>

                <a 
                  href="#courses" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold uppercase tracking-wide text-white hover:text-brand transition-colors"
                >
                  Курсы
                </a>
                <a 
                  href="#instructors" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold uppercase tracking-wide text-white hover:text-brand transition-colors"
                >
                  Инструкторы
                </a>
                <a 
                  href="#reviews" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold uppercase tracking-wide text-white hover:text-brand transition-colors"
                >
                  Отзывы
                </a>
              </nav>

              <div className="p-6 pb-10 border-t border-white/10 flex flex-col gap-4">
                <a 
                  href="tel:+79991234567" 
                  className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold w-full text-lg shadow-[0_0_30px_rgba(234,88,12,0.4)] active:scale-[0.98] transition-transform"
                >
                  <Phone className="w-6 h-6 fill-current" />
                  <span>+7 (999) 123-45-67</span>
                </a>
                
                <div className="flex justify-center mt-2">
                   <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <Moon className="w-5 h-5" />
                      <span>Тёмная тема</span>
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
