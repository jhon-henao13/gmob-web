import { motion } from 'framer-motion';

// Importación de la imagen de fondo requerida
import bgHero from '../assets/background-hero.jpg';
import bgHeroMobile from '../assets/background-hero-mobile.jpg';
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
    <section className="relative min-h-screen flex flex-col justify-between md:justify-center pt-20 pb-8 sm:pb-12 overflow-hidden bg-[#EFEFEF]">
      {/* BACKGROUND IMAGE CAPA FULL */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgHeroMobile}
          alt="G MOB Studio Sillas Ergonomicas Mobile"
          className="md:hidden w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Imagen para desktop */}
        <img
          src={bgHero}
          alt="G MOB Studio Sillas Ergonomicas"
          className="hidden md:block w-full h-full object-cover object-right"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Sutil gradiente o sombra blanca de arriba hacia abajo transparente */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTOS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-6 space-y-4 max-w-2xl"
          >
            {/* CATEGORÍA/TAGLINE */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="hidden md:inline-block text-gray-700 font-medium uppercase !tracking-widest text-base sm:text-lg font-sans border-b-2 border-gmob-red pb-1">
                MOBILIARIO | NEGOCIOS
              </span>
            </motion.div>

            {/* TITULAR PRINCIPAL EN MONTSERRAT */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-black !leading-[0.9] font-spartan !tracking-normal !mt-0"
            >
              La nueva forma <br className="hidden sm:inline" />
              de trabajar
            </motion.h1>

            {/* PARÁGRAFO Y BENEFICIOS */}
            <motion.p
              variants={itemVariants}
              className="text-gray-800 text-base sm:text-xl !leading-snug font-sans max-w-lg font-normal"
            >
              La mayor durabilidad y confort al precio más accesible del mercado.
              Precios especiales por volumen y entrega inmediata en la ZMG.
            </motion.p>

            {/* DUAL CTA BUTTONS (SOLO DESKTOP - En mobile se mueven abajo del todo) */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-row justify-start items-center gap-3 sm:gap-4 pt-2 w-full"
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
          </motion.div>

          {/* COLUMNA DERECHA: LOGOS FLOTANTES DE MARCA (OFFIHO - OCULTO EN MOBILE) */}
          <div className="hidden md:block lg:col-span-5 xl:col-span-6 relative min-h-[300px] lg:min-h-[500px] pointer-events-none">
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
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-lg translate-x-10"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* DUAL CTA BUTTONS EXCLUSIVOS PARA MOBILE (Ubicados en la parte más baja de la sección) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full block md:hidden pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row justify-center items-center gap-3 w-full"
        >
          <a
            href="https://wa.me/573000000000?text=Hola,%20deseo%20una%20cotización%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gmob-red text-white font-extrabold px-4 py-3.5 rounded-lg text-center shadow-lg transition-all font-montserrat text-sm tracking-wide flex-1"
          >
            Cotizar Ahora
          </a>

          <a
            href="#catalogo"
            className="bg-[#6e6c69] text-white font-extrabold px-4 py-3.5 rounded-lg text-center shadow-md transition-all font-montserrat text-sm tracking-wide flex-1"
          >
            Descargar Catálogo
          </a>
        </motion.div>
      </div>
    </section>
  );
}