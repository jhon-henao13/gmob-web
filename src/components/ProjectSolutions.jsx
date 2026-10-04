import { motion } from 'framer-motion';

// Importación de la imagen del proyecto
import mobiliarioOficinaImg from '../assets/mobiliario-oficina.png';

// Número corporativo de WhatsApp
const WHATSAPP_NUMBER = "523332222490";

export default function ProjectSolutions() {
  const message = encodeURIComponent(
    "¡Hola G MOB! Vengo de la web y me gustaría cotizar e ingresar información sobre el mobiliario exacto para mi proyecto."
  );
  const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  // Puntos clave de la lista con íconos personalizados
  const features = [
    {
      title: "Sillas ergonómicas:",
      desc: "Modelos ejecutivos, operativos, directivos y cajeros en malla transpirable o piel.",
    },
    {
      title: "Estaciones de trabajo:",
      desc: "Escritorios elevables (sit-stand), ejecutivos y bancadas operativas.",
    },
    {
      title: "Espacios complementarios:",
      desc: "Sillones confortables para recepción, sillas de visita y bancos para consultorios.",
    },
  ];

  return (
    <section className="py-28 sm:py-32 bg-white relative overflow-hidden">
      {/* Elemento Decorativo de Fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ==================================================================== */}
          {/* COLUMNA IZQUIERDA: IMAGEN CON EFECTO PREMIUM Y HOVER                */}
          {/* ==================================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative group"
          >
            {/* Marco Trasero Decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/10 via-gray-100 to-transparent rounded-[2.5rem] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 -z-10" />

            {/* Contenedor Principal de la Imagen */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img
                src={mobiliarioOficinaImg}
                alt="Encuentra el mobiliario exacto para tu proyecto"
                className="w-full h-[420px] sm:h-[500px] lg:h-[540px] object-contain object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay sutil en la parte inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Floating Badge Interactivo */}
              {/* <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">
                    Proyectos Integrales
                  </p>
                  <p className="text-sm font-bold text-gray-900 font-montserrat">
                    Garantía & Ergonomía Premium
                  </p>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* ==================================================================== */}
          {/* COLUMNA DERECHA: TEXTO Y CONTENIDO                                  */}
          {/* ==================================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center lg:-mt-32"
          >
            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-spartan text-black tracking-tight leading-[1.15] mb-8">
              Encuentra el mobiliario <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                exacto para tu proyecto
              </span>
            </h2>

            {/* Subtítulo Categoría */}
            <div className="inline-flex items-center justify-center gap-2 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-gray-900 tracking-wide">
                Mobiliario de Oficina
              </h3>
            </div>

            {/* Breve Descripción */}
            <p className="text-base sm:text-lg font-sans text-gray-600 leading-relaxed mb-8">
              Soluciones ergonómicas y ejecutivas diseñadas para soportar jornadas continuas de <strong className="text-gray-900 font-semibold">8+ horas</strong> con máximo confort postural.
            </p>

            {/* Lista de Viñetas */}
            <div className="space-y-7 mb-10">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-3.5 group/item"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover/item:bg-red-600 group-hover/item:text-white transition-colors duration-300 shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base font-sans text-gray-700 leading-snug">
                    <strong className="font-bold text-gray-900 mr-1">{item.title}</strong>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Botón Principal (CTA Redirigido a WhatsApp) */}
            <div className="flex mx-auto justify-center">
              <motion.a
                href={wpLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold font-montserrat text-base sm:text-lg rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Reflejo brillante de fondo al pasar mouse */}
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                <span>Cotizar Ahora</span>

                {/* Ícono Flecha */}
                <svg className="w-5 h-5 ml-2.5 transform group-hover:translate-x-1 transition-transform duration-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </motion.a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}