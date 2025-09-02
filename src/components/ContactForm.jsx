import { useState } from "react";
import { send } from "@emailjs/browser";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear status message when user starts typing
    if (statusMessage) {
      setStatusMessage("");
      setMessageType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setMessageType("");

    try {
      // Check if environment variables are available
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuración de EmailJS incompleta. Por favor, verifica las variables de entorno.");
      }

      const result = await send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Aludev Team"
        },
        publicKey
      );

      if (result.status === 200) {
        setStatusMessage(t('contact.success'));
        setMessageType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error en el envío del mensaje");
      }

    } catch (error) {
      console.error("Error sending email:", error);

      let errorMessage = t('contact.error');

      if (error.message.includes("Configuración")) {
        errorMessage = t('contact.configError');
      } else if (error.message.includes("network")) {
        errorMessage = t('contact.networkError');
      } else if (error.message.includes("rate limit")) {
        errorMessage = t('contact.rateLimitError');
      }

      setStatusMessage(errorMessage);
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-[#A84D76]/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A84D76] to-[#842d56] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{t('contact.info.phone')}</p>
                    <p className="text-neutral-400">(+54) 11 5002-0222</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-[#A84D76]/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A84D76] to-[#842d56] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{t('contact.info.location')}</p>
                    <p className="text-neutral-400">Andalgala 5432, Isidro Casanova</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-[#A84D76]/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A84D76] to-[#842d56] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{t('contact.info.email')}</p>
                    <p className="text-neutral-400">contacto@aludev.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-neutral-900/80 p-8 lg:p-12 rounded-2xl border border-neutral-700/50 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-white text-sm font-medium mb-3" htmlFor="name">
                      <FaUser className="inline mr-2 text-[#A84D76]" />
                      {t('contact.form.name')}
                    </label>
                    <input
                      className="w-full px-4 py-4 border border-neutral-700 rounded-xl focus:outline-none focus:border-[#A84D76] focus:ring-2 focus:ring-[#A84D76]/20 transition-all duration-300 bg-neutral-800 text-white placeholder-neutral-500"
                      id="name"
                      type="text"
                      placeholder={t('contact.form.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-white text-sm font-medium mb-3" htmlFor="email">
                      <FaEnvelope className="inline mr-2 text-[#A84D76]" />
                      {t('contact.form.email')}
                    </label>
                    <input
                      className="w-full px-4 py-4 border border-neutral-700 rounded-xl focus:outline-none focus:border-[#A84D76] focus:ring-2 focus:ring-[#A84D76]/20 transition-all duration-300 bg-neutral-800 text-white placeholder-neutral-500"
                      id="email"
                      type="text"
                      placeholder={t('contact.form.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-white text-sm font-medium mb-3" htmlFor="message">
                    <FaPaperPlane className="inline mr-2 text-[#A84D76]" />
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    className="w-full px-4 py-4 border border-neutral-700 rounded-xl focus:outline-none focus:border-[#A84D76] focus:ring-2 focus:ring-[#A84D76]/20 transition-all duration-300 bg-neutral-800 text-white placeholder-neutral-500 resize-none"
                    id="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#A84D76] to-[#842d56] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#A84D76]/25 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.form.sending')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FaPaperPlane className="mr-2" />
                      {t('contact.form.send')}
                    </span>
                  )}
                </button>
              </form>

              {statusMessage && (
                <motion.div
                  className={`mt-6 p-4 rounded-xl text-center ${
                    messageType === "success"
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {statusMessage}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;