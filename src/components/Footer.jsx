import { FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-700/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Company Info */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-3">Aludev</h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            {t('footer.description')}
          </p>
        </div>

        {/* Contact Link */}
        <div className="text-center mb-6">
          <a
            href="mailto:contacto@aludev.com"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#A84D76] to-[#842d56] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            <FaEnvelope className="mr-2" />
            contacto@aludev.com
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700/50 pt-6">
          <div className="text-center">
            <p className="text-neutral-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;