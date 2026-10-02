import { motion } from 'framer-motion';

// Importación de la imagen de fondo requerida
import bgHero from '../assets/background-hero.png';
import offihoBlackImg from '../assets/offiho-black.png';
import offihoItalyImg from '../assets/offiho-italy.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#EFEFEF]">
      {/* BACKGROUND IMAGE CAPA FULL */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgHero}
          alt="G MOB Studio Sillas Ergonomicas"
          className="w-full h-full object-cover object-center md:object-right"
          onError={(e) => {
            // Fallback visual si la imagen de fondo aún no se encuentra
            e.target.style.display = 'none';
          }}
        />
        {/* Overlay suave para legibilidad responsive en pantallas pequeñas */}
        {/* Overlay combinando gradiente negro en la izquierda central y blanco superior */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent w-full md:w-3/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-transparent pointer-events-none" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA:*/}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-6 space-y-6 max-w-2xl"
          >
            {/* CATEGORÍA/TAGLINE */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="text-gray-700 font-medium uppercase !tracking-widest text-base sm:text-lg font-sans border-b-2 border-gmob-red pb-1">
                MOBILIARIO | NEGOCIOS
              </span>
            </motion.div>

            {/* TITULAR PRINCIPAL EN MONTSERRAT */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-black !leading-[0.9] font-spartan !tracking-normal"
            >
              La nueva forma <br className="hidden sm:inline" />
              de trabajar
            </motion.h1>

            {/* PARÁGRAFO Y BENEFICIOS */}
            <motion.p
              variants={itemVariants}
              className="text-gray-800 text-lg sm:text-xl !leading-snug font-sans max-w-lg font-normal"
            >
              La mayor durabilidad y confort al precio más accesible del mercado.
              Precios especiales por volumen y entrega inmediata en la ZMG.
            </motion.p>

            {/* DUAL CTA BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <motion.a
                href="https://wa.me/573000000000?text=Hola,%20deseo%20una%20cotización%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="bg-gmob-red hover:bg-gmob-red-hover text-white font-extrabold px-5 py-4 rounded-lg text-center shadow-lg hover:shadow-red-glow transition-all duration-300 font-montserrat text-base tracking-wide"
              >
                Cotizar Ahora
              </motion.a>

              <motion.a
                href="#catalogo"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#6e6c69] hover:bg-gray-700 text-white font-extrabold px-5 py-4 rounded-lg text-center shadow-md transition-all duration-300 font-montserrat text-base tracking-wide"
              >
                Descargar Catálogo
              </motion.a>
            </motion.div>

            {/* BADGES O GARANTÍAS ADICIONALES */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex items-center space-x-6 text-xs sm:text-sm text-gray-500 font-medium"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gmob-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Garantía de Fábrica</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gmob-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Envíos Inmediatos</span>
              </div>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: LOGOS FLOTANTES DE MARCA (OFFIHO) */}
          <div className="lg:col-span-5 xl:col-span-6 relative min-h-[300px] lg:min-h-[500px] pointer-events-none">
            {/* Insignias de marcas con las imágenes importadas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute top-4 right-32 md:right-64 z-20 flex flex-col items-end gap-0"
            >
              <img
                src={offihoBlackImg}
                alt="Offiho Black"
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-lg -mb-6"
              />
              <img
                src={offihoItalyImg}
                alt="Offiho Italy"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-lg  translate-x-10"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}