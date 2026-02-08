export const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Left Side */}
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <h4 className="font-bold text-white mb-2">ООО "Прайд"</h4>
            <p>ИНН: 1234567890</p>
            <p>+7 (999) 123-45-67</p>
          </div>

          {/* Right Side */}
          <div className="text-sm text-gray-400">
            <a href="mailto:info@pride.ru" className="hover:text-brand transition-colors">
              info@pride.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
