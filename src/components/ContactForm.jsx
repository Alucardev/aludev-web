const ContactForm = () => {
  return (
    <div className="mt-20 tracking-wide px-4">
      <h2 className=" text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Contáctanos
      </h2>
    
      <div className="max-w-lg mx-auto bg-gradient-to-r from-purple-500 to-green-800 p-6 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Tu nombre."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico / Teléfono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Tu email o número para contactarte."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Asunto
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Cuéntanos en qué podemos ayudarte."
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white text-purple-800 py-3 px-4 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Enviar
          </button>
        </form>

        {/* Información adicional */}
        <div className="mt-8 text-white text-sm">
          <h3 className="font-bold text-lg">Información de Contacto</h3>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
          <p>Email: contacto@ejemplo.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
