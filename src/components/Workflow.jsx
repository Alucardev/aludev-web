import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Workflow = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-32 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            {t('workflow.title')}{" "}
            <span className="bg-gradient-to-r from-[#A84D76] to-[#842d56] text-transparent bg-clip-text">
              {t('workflow.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
            {t('workflow.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#A84D76]/20 to-[#842d56]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={codeImg}
                alt="Desarrollo de software profesional"
                className="relative w-full h-80 lg:h-96 object-cover rounded-2xl border border-neutral-700/50 shadow-2xl shadow-[#A84D76]/10 group-hover:shadow-[#A84D76]/20 transition-all duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {checklistItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A84D76] to-[#842d56] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-[#A84D76] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-[#A84D76]/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#A84D76] to-[#842d56] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('workflow.features.fast')}</h3>
            <p className="text-neutral-400">{t('workflow.features.fastDesc')}</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-[#A84D76]/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#A84D76] to-[#842d56] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('workflow.features.reliable')}</h3>
            <p className="text-neutral-400">{t('workflow.features.reliableDesc')}</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-[#A84D76]/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#A84D76] to-[#842d56] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('workflow.features.custom')}</h3>
            <p className="text-neutral-400">{t('workflow.features.customDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
