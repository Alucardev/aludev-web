import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700/50 hover:border-[#A84D76]/50 transition-all duration-300 text-neutral-300 hover:text-white"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Globe size={16} />
      <span className="font-medium text-sm">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSelector;
