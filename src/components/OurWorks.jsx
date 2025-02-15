import { motion } from "framer-motion";
import { OurWorksList } from "../constants";

const OurWorks = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-12 lg:my-24">
        Algunos de nuestros{" "}
        <span className="bg-gradient-to-r from-[#A84D76] to-[#842d56] text-transparent bg-clip-text">
          trabajos.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {OurWorksList.map((work, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-3/4 lg:w-2/3 px-6 py-4"
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }} // Desliza desde la izquierda o derecha según el índice
            whileInView={{ opacity: 1, x: 0 }} // Vuelve a la posición original al estar visible
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-neutral-900 rounded-lg p-8 text-lg border border-neutral-800 font-thin">
              {/* Contenedor de la imagen */}
              <motion.div
                className="w-full h-96 overflow-hidden rounded-lg mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={work.image}
                  alt={work.title}
                />
              </motion.div>
              <h6 className="text-2xl font-semibold mb-4">{work.title}</h6>
              <p className="text-neutral-400 text-lg">{work.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
