import desktop from "../assets/desktop.jpg";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="flex flex-col items-center py-20 lg:py-32">
      {/* Main Heading */}
      <div className="text-center max-w-6xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
          {t('hero.title')}{" "}
          <span className="bg-gradient-to-r from-[#A84D76] to-[#842d56] text-transparent bg-clip-text">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        
        <p className="mt-8 lg:mt-12 text-lg lg:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 lg:mt-16">
        <button
          onClick={() => {
            const element = document.querySelector('#contact');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="bg-gradient-to-r from-[#A84D76] to-[#842d56] text-white py-4 px-8 rounded-xl text-lg font-semibold shadow-2xl shadow-[#A84D76]/25 hover:shadow-[#A84D76]/40 hover:scale-105 transition-all duration-300 transform"
        >
          {t('hero.contactBtn')}
        </button>
        <button
          onClick={() => {
            const element = document.querySelector('#services');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="py-4 px-8 rounded-xl text-lg font-semibold border-2 border-[#A84D76] text-[#A84D76] hover:bg-[#A84D76] hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          {t('hero.moreInfoBtn')}
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-6xl mt-16 lg:mt-24 px-6">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#A84D76]/20 to-[#842d56]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={desktop}
            alt="Desarrollo de aplicaciones web y móviles"
            className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl border border-neutral-700/50 shadow-2xl shadow-[#A84D76]/10 group-hover:shadow-[#A84D76]/20 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;