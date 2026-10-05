import { motion } from 'framer-motion';

export default function WhyUs() {
  // Datos exactos extraídos de la imagen
  const features = [
    {
      id: 'showroom',
      title: 'Showroom',
      description:
        'Agenda tu cita para probar la ergonomía antes de comprar. Prestamos muestras para pruebas en tu empresa.',
      // Icono estilo Line-Art de Edificio / Showroom (Tamaño optimizado responsive)
      icon: (
        <svg
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-400 sm:text-gray-500 group-hover:text-gmob-red transition-colors duration-300 stroke-[1] sm:stroke-[0.7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1"
          />
        </svg>
      ),
    },
    {
      id: 'garantia',
      title: 'Garantía',
      description:
        '5 años en Offiho, 10 años en Offiho Black. Con taller y refacciones locales en la ZMG.',
      // Icono estilo Escudo con Checkmark (Tamaño optimizado responsive)
      icon: (
        <svg
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-400 sm:text-gray-500 group-hover:text-gmob-red transition-colors duration-300 stroke-[1] sm:stroke-[0.7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 'entrega',
      title: 'Entrega-Armado',
      description:
        'Stock disponible para entrega en 3 a 5 días. En la ZMG, entrega el mueble armado y listo para usar.',
      // Icono estilo Camión de Logística / Entrega (Tamaño optimizado responsive)
      icon: (
        <svg
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-400 sm:text-gray-500 group-hover:text-gmob-red transition-colors duration-300 stroke-[1] sm:stroke-[0.7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V14.25m0 0H3.375"
          />
        </svg>
      ),
    },
    {
      id: 'certificaciones',
      title: 'Certificaciones',
      description:
        'Normativas BIFMA, ANSI, ISO y protección UV para exteriores que garantizan una inversión a largo plazo.',
      // Icono estilo Estrella de Certificación y Calidad (Tamaño optimizado responsive)
      icon: (
        <svg
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-400 sm:text-gray-500 group-hover:text-gmob-red transition-colors duration-300 stroke-[1] sm:stroke-[0.7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.486-.425.878-.852.623l-4.671-2.807a.563.563 0 00-.58 0l-4.67 2.807c-.427.255-.968-.137-.852-.623l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ),
    },
  ];

  // Variantes de animación de Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="nosotros" className="py-16 sm:py-28 bg-white border-y border-gray-100 overflow-hidden relative">
      {/* Sutil brillo de fondo decorativo */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center"
        >
          
          {/* COLUMNA IZQUIERDA: TITULAR */}
          <motion.div variants={titleVariants} className="lg:col-span-5 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black !leading-[1.2] font-montserrat tracking-tight">
              ¿Por qué las <br className="hidden sm:inline" />
              empresas eligen <br className="hidden sm:inline" />
              <span className="text-black relative inline-block font-extrabold">
                G MOB?
                <span className="absolute left-0 bottom-1 w-full h-2 bg-gmob-red/10 -z-10 rounded" />
              </span>
            </h2>
          </motion.div>

          {/* COLUMNA DERECHA: CARDS Y POSICIONAMIENTO RESPONSIVE */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-8 sm:gap-y-12">
            {features.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative flex flex-col sm:justify-between pt-2 pb-2 sm:min-h-[170px] bg-gray-50/50 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-gray-100 sm:border-none shadow-sm sm:shadow-none"
              >
                {/* 
                  ESTRUCTURA HÍBRIDA RESPONSIVE:
                  - En Mobile (< 640px): El icono va arriba, seguido del título y párrafo en flujo normal (flex-col).
                  - En Desktop (sm: en adelante): Mantiene tu diseño libre absoluto con pl-8 en el texto y el icono flotando abajo a la izquierda.
                */}
                
                {/* ICONO (Arriba en Mobile / Posicionado absoluto abajo en Desktop) */}
                <div className="mb-4 sm:mb-0 sm:absolute sm:-left-6 lg:sm:-left-10 sm:bottom-[-20px] flex items-end z-10 pointer-events-none">
                  {item.icon}
                </div>

                {/* BLOQUE DE TÍTULO Y DESCRIPCIÓN */}
                <div className="sm:pl-8">
                  <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-black tracking-tight group-hover:text-gmob-red transition-colors duration-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed sm:pr-2">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}