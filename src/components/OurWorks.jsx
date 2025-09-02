import { motion } from "framer-motion";
import { OurWorksList } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const OurWorks = () => {
  const { t } = useLanguage();

  // Define technologies for each project
  const projectTechnologies = [
    ['react', 'csharp', 'aspnet', 'sqlserver'], // Portal de Clientes
    ['react', 'nodejs', 'mongodb', 'chartjs'] // Sistema Financiero
  ];

  // Define project keys for translations
  const projectKeys = ['portal', 'financial'];

  return (
    <section id="works" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            {t('works.title')}{" "}
            <span className="bg-gradient-to-r from-[#A84D76] to-[#842d56] text-transparent bg-clip-text">
              {t('works.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
            {t('works.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {OurWorksList.map((work, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-neutral-900/80 rounded-2xl p-8 border border-neutral-800/50 hover:border-[#A84D76]/50 transition-all duration-500 group-hover:bg-neutral-900 h-full">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <motion.div
                    className="w-full h-64 lg:h-80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={work.image}
                      alt={work.title}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#A84D76] transition-colors duration-300">
                    {t(`works.projects.${projectKeys[index]}.title`)}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {t(`works.projects.${projectKeys[index]}.description`)}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {projectTechnologies[index]?.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-[#A84D76]/20 text-[#A84D76] rounded-full text-sm font-medium border border-[#A84D76]/30"
                      >
                        {t(`works.techStack.${tech}`)}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <button
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#A84D76] to-[#842d56] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#A84D76]/25"
                    >
                      {t('works.viewProject')}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="bg-gradient-to-r from-[#A84D76]/10 to-[#842d56]/10 rounded-2xl p-8 lg:p-12 border border-[#A84D76]/20">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              {t('works.cta.title')}
            </h3>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              {t('works.cta.subtitle')}
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#A84D76] to-[#842d56] text-white rounded-xl text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#A84D76]/25"
            >
              {t('works.cta.button')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
