import { OurWorksList } from "../constants"; // Cambia el nombre de la constante importada

const OurWorks = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-12 lg:my-24">
          Algunos de nuestros{" "}
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          trabajos.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {OurWorksList.map((work, index) => (
          <div key={index} className="w-full sm:w-3/4 lg:w-2/3 px-6 py-4">
            <div className="bg-neutral-900 rounded-lg p-8 text-lg border border-neutral-800 font-thin">
              {/* Contenedor de la imagen */}
              <div className="w-full h-96 overflow-hidden rounded-lg mb-6">
                <img
                  className="w-full h-full object-cover"
                  src={work.image}
                  alt={work.title}
                />
              </div>
              <h6 className="text-2xl font-semibold mb-4">{work.title}</h6>
              <p className="text-neutral-400 text-lg">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;