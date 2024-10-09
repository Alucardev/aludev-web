const ContactForm = () => {
  return (
  
    <div className="mt-20 tracking-wide">
      <h2 className="bg-gradient-to-r from-purple-500 to-green-800 text-transparent bg-clip-text text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Contactanos
      </h2>
    
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Tu nombre."
          />
        </div>

        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
            Correo/Telefono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Tu email o numero para que podamos contactarte."
          />
        </div>

        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="message">
            Asunto
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Cuentanos en que podemos ayudarte."
            rows="4"
          />
        </div>

        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md"
        >
          Enviar
        </a>
      </form>
    </div>
  );
};

export default ContactForm;
