import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="mt-20 tracking-wide px-4">
      {/* Título */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Contáctanos
      </h2>

      {/* Contenedor del Formulario */}
      <div className="max-w-4xl mx-auto bg-neutral-900 p-8 rounded-lg shadow-lg">
        {/* Formulario */}
        <form>
          {/* Campos en la misma fila en pantallas grandes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campo: Nombre */}
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-[#A84D76] transition duration-300 bg-gray-800 text-white"
                id="name"
                type="text"
                placeholder="Tu nombre."
                required
              />
            </div>

            {/* Campo: Correo Electrónico / Teléfono */}
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                Correo Electrónico / Teléfono
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-[#A84D76] transition duration-300 bg-gray-800 text-white"
                id="email"
                type="email"
                placeholder="Tu email o número para contactarte."
                required
              />
            </div>
          </div>

          {/* Campo: Asunto */}
          <div className="mt-6">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="message">
              Asunto
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-[#A84D76] transition duration-300 bg-gray-800 text-white"
              id="message"
              placeholder="Cuéntanos en qué podemos ayudarte."
              rows="4"
              required
            />
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#A84D76] to-[#842d56] text-white py-3 px-4 rounded-lg hover:opacity-90 transition duration-300 shadow-md shadow-[#A84D76]"
          >
            Enviar
          </button>
        </form>

        {/* Información Adicional */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="flex items-center space-x-3">
            <FaPhone className="text-[#A84D76]" />
            <p>(+54) 11 5002-0222</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-[#A84D76]" />
            <p>Andalgala 5432, Isidro Casanova</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-[#A84D76]" />
            <p>contacto@aludev.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
