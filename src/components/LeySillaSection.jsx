import { motion } from 'framer-motion';
import sillaImage from '../assets/sillaGreenCheck.png';

// Número corporativo de WhatsApp
const WHATSAPP_NUMBER = "523332222490";

export default function LeySillaSection() {
  const message = encodeURIComponent(
    "¡Hola G MOB! Quiero asesoría sobre la Ley Silla y las sillas ergonómicas normativas para mi empresa."
  );
  const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  // Características / Beneficios para enriquecer el lado derecho al estilo GMOB
  const highlights = [
    {
      title: "180 Días de Plazo",
      desc: "Adecuación de reglamentos y adquisición de mobiliario ergonómico.",
      icon: (
        <svg className="w-5 h-5 text-gmob-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Ergonomía Certificada",
      desc: "Sillas de oficina diseñadas para proteger la salud lumbar y la postura postural.",
      icon: (
        <svg className="w-5 h-5 text-gmob-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Cumplimiento Legal LFT",
      desc: "Evita sanciones amparando el descanso adecuado durante la jornada.",
      icon: (
        <svg className="w-5 h-5 text-gmob-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-b from-gmob-light via-white to-gmob-light relative overflow-hidden">
      {/* Glows y luces decorativos de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gmob-red/5 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gmob-red/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TARJETA / CONTENEDOR PRINCIPAL */}
        <div className="bg-white rounded-3xl shadow-premium border border-gray-100/80 overflow-hidden relative">
          
          {/* Línea de acento superior estilo GMOB */}
          <div className="h-2 w-full bg-gradient-to-r from-gmob-red via-red-600 to-gmob-dark" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            
            {/* LADO IZQUIERDO: */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between items-center text-center bg-gradient-to-b from-white to-gmob-light/60 relative"
            >
              {/* Badge Legal / Normativa */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gmob-red/10 border border-gmob-red/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-gmob-red animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-gmob-red font-montserrat">
                  Normativa Laboral México
                </span>
              </div>

              {/* Título Principal / Pregunta */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-spartan text-gmob-dark tracking-tight !leading-[1.1] mb-2">
                ¿Qué es la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gmob-red to-red-800 underline decoration-gmob-red/30 underline-offset-4">
                  Ley Silla
                </span>{" "}
                y porque es importante que las empresas la implementen correctamente?
              </h2>

              {/* Imagen Silla Ergonómica GMOB */}
              <div className="relative my-2 group">
                {/* Glow decorativo detrás de la imagen */}
                <div className="absolute inset-0 bg-gmob-red/10 rounded-full blur-2xl group-hover:bg-gmob-red/20   transition-all duration-500" />
                
                <div className="relative w-64 h-64 sm:w-54 sm:h-54 mx-auto flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100 group-hover:scale-105 transition-transform duration-500 p-1 overflow-hidden">
                  <img 
                    src={sillaImage} 
                    alt="Silla Ergonómica Ley Silla G MOB" 
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
              </div>

              {/* Indicador de Asesoría Gratuita */}
              <div className="mt-6 text-xs text-gmob-gray font-sans font-medium">
                G MOB te asesora para cumplir con la norma sin contratiempos.
              </div>
            </motion.div>

            {/* LADO DERECHO: */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white"
            >
              <div>
                {/* Párrafo Principal / Resaltado */}
                <div className="mb-8">
                  <p className="text-base sm:text-lg font-sans text-gmob-dark !leading-[1.8]">
                    La <strong className="font-extrabold text-gmob-red">Ley Silla es una reforma en México</strong> la cual dictamina como un derecho fundamental{" "}
                    <span className="bg-gmob-red/10 px-2 py-0.5 rounded text-gmob-dark font-semibold">
                      "el descanso durante la jornada laboral"
                    </span>
                    . Amparada por la <strong className="font-bold text-gmob-dark">Ley Federal del Trabajo</strong>, busca proteger la salud física de los colaboradores que realizan sus labores de pie.
                  </p>
                </div>

                {/* Grilla de Tarjetas Interactivas de Puntos Clave */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-2xl bg-gmob-light border border-gray-100 hover:border-gmob-red/30 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm mb-3">
                        {item.icon}
                      </div>
                      <h4 className="font-montserrat font-bold text-sm text-gmob-dark mb-2">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-gmob-gray leading-snug">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Párrafo Secundario */}
                <div className="p-5 rounded-2xl bg-gray-50 border-l-4 border-gmob-red mb-8">
                  <p className="text-base font-sans text-gmob-gray leading-relaxed">
                    Una vez entrada en vigor, los empleadores tienen un plazo de{" "}
                    <strong className="text-gmob-dark font-bold">180 días</strong> para adaptar sus reglamentos internos y adquirir las sillas ergonómicas necesarias y adecuadas.
                  </p>
                </div>
              </div>

              {/* Botón de Acción Call-To-Action (CTA) GMOB */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-montserrat font-bold uppercase text-gmob-gray tracking-wider">
                    ¿Sillas normativas para tu empresa?
                  </div>
                  <div className="text-sm font-bold text-gmob-dark font-montserrat">
                    Solicita catálogo y cotización
                  </div>
                </div>

                <a
                  href={wpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gmob-red hover:bg-gmob-red-hover text-white font-montserrat font-bold text-sm tracking-wide shadow-red-glow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Asesoría Ley Silla</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}