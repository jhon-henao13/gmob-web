import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Número corporativo de WhatsApp para dudas no resueltas
const WHATSAPP_NUMBER = "523332222490";

export default function FAQ() {
  // Estado para controlar qué ítem está abierto (solo 1 abierto a la vez, null si ninguno)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const message = encodeURIComponent(
    "¡Hola G MOB! Tengo una consulta sobre el mobiliario que no encontré en las Preguntas Frecuentes."
  );
  const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  // Lista de preguntas frecuentes con la información oficial de GMOB
  const faqs = [
    {
      id: "01",
      question: "¿Tienen el producto para entrega inmediata o es sobre pedido?",
      answer:
        "Manejamos un amplio stock para entrega inmediata (3 a 5 días) en la Zona Metropolitana de Guadalajara (ZMG). Para proyectos de gran volumen o fabricación especial, los tiempos se coordinan detalladamente al cotizar.",
      category: "Stock y Tiempos",
    },
    {
      id: "02",
      question: "¿El mueble viene armado o requiere ensamblaje en ZMG?",
      answer:
        "En entregas dentro de la Zona Metropolitana de Guadalajara, nuestro flete propio incluye el armado e instalación profesional en tu espacio sin ningún costo extra.",
      category: "Instalación",
    },
    {
      id: "03",
      question: "¿Puedo ir al showroom a probar las sillas o ver catálogos?",
      answer:
        "¡Sí! Atendemos previa cita de Lunes a Viernes de 9:00 am a 6:00 pm en nuestro showroom ubicado en Calz. de las Palmas 60, Las Conchas, Guadalajara.",
      category: "Showroom",
    },
    {
      id: "04",
      question: "¿Prestan muestras a empresas o despachos de arquitectura?",
      answer:
        "Sí, prestamos sillas para pruebas piloto por un plazo de hasta 3 días hábiles bajo un depósito en garantía de la mercancía.",
      category: "Pruebas Piloto",
    },
    {
      id: "05",
      question: "¿Facturan y los precios incluyen IVA?",
      answer:
        "Sí, facturamos todas las compras corporativas e individuales. Todos los precios son más IVA o incluyen desglose fiscal transparente.",
      category: "Facturación",
    },
    {
      id: "06",
      question: "¿Manejan descuentos por mayoreo o volumen?",
      answer:
        "Ofrecemos escalonamiento de precios y descuentos de hasta el 25% dependiendo del volumen y la línea elegida (especialmente en la gama Offiho Black).",
      category: "Mayoreo",
    },
    {
      id: "07",
      question: "¿Cuánto cuesta el envío fuera de Guadalajara?",
      answer:
        "Enviamos a toda la República Mexicana mediante paquetería coordinada directamente con el fabricante (OFFIHO), aplicando un cargo logístico aproximado del 5% sobre la compra.",
      category: "Envíos Nacionales",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-gmob-light to-white relative overflow-hidden">
      {/* Luces y elementos decorativos de fondo estilo GMOB */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gmob-red/5 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gmob-red/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================================== */}
        {/* ENCABEZADO / HEADER                                                  */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Badge / Tag Superior */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gmob-red/10 border border-gmob-red/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gmob-red animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gmob-red font-montserrat">
              Preguntas Frecuentes
            </span>
          </motion.div>

          {/* Título Principal Replicado y Elevado */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-spartan text-gmob-dark tracking-normal !leading-[1.2] mb-2 uppercase"
          >
            Resolvemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gmob-red to-red-800">
              Tus Dudas
            </span>
          </motion.h2>

          {/* Línea divisoria de acento rojo estilo GMOB */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1.5 bg-gradient-to-r from-gmob-red to-red-700 rounded-full mx-auto mb-6"
          />

          {/* <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg font-sans text-gmob-gray leading-relaxed max-w-2xl mx-auto"
          >
            Todo lo que necesitas saber sobre entregas, showroom, muestras físicas y condiciones de compra en{" "}
            <strong className="text-gmob-dark font-semibold">G MOB</strong>.
          </motion.p> */}
        </div>

        {/* ==================================================================== */}
        {/* CONTENEDOR DE LA LISTA DE ACORDEONES                                 */}
        {/* ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl p-4 sm:p-8 shadow-premium border border-gray-100/90 space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-gmob-light/80 border-gmob-red/40 shadow-sm"
                    : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
                }`}
              >
                {/* BOTÓN DEL ACORDEÓN (PREGUNTA) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 focus:outline-none rounded-2xl group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    {/* Número de Pregunta */}
                    <span
                      className={`text-sm sm:text-base font-montserrat font-extrabold px-3 py-1 rounded-xl transition-colors duration-300 ${
                        isOpen
                          ? "bg-gmob-red text-white"
                          : "bg-gray-100 text-gmob-gray group-hover:bg-gmob-red/10 group-hover:text-gmob-red"
                      }`}
                    >
                      {faq.id}
                    </span>

                    {/* Texto de la Pregunta */}
                    <h3
                      className={`text-base sm:text-lg font-montserrat font-bold transition-colors duration-300 ${
                        isOpen
                          ? "text-gmob-red"
                          : "text-gmob-dark group-hover:text-gmob-red"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Ícono Interactivo (+ / - animado) */}
                  <div
                    className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-gmob-red text-white rotate-180 shadow-md shadow-gmob-red/20"
                        : "bg-gray-100 text-gmob-dark group-hover:bg-gmob-red/10 group-hover:text-gmob-red"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {isOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M20 12H4"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M12 4v16m8-8H4"
                        />
                      )}
                    </svg>
                  </div>
                </button>

                {/* DESPLEGABLE CON LA RESPUESTA (ANIMADO CON FRAMER MOTION) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 ml-0 sm:ml-12 border-t border-gray-200/50 mt-1">
                        <div className="inline-block mt-3 mb-2 px-2.5 py-0.5 rounded-md bg-gmob-red/10 text-[11px] font-bold font-montserrat uppercase tracking-wider text-gmob-red">
                          {faq.category}
                        </div>
                        <p className="font-sans text-sm sm:text-base text-gmob-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>


        {/* CTA WPP */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-8 rounded-3xl bg-gmob-dark text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gmob-red/20 blur-3xl rounded-full pointer-events-none -z-0" />

          <div className="text-center sm:text-left relative z-10">
            <h4 className="text-xl font-bold font-montserrat text-white mb-1">
              ¿Tienes alguna otra pregunta?
            </h4>
            <p className="text-sm font-sans text-gray-300">
              Nuestro equipo de asesores corporativos está listo para ayudarte al instante.
            </p>
          </div>

          <a
            href={wpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gmob-red hover:bg-gmob-red-hover text-white font-montserrat font-bold text-sm tracking-wide shadow-red-glow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Consultar por WhatsApp</span>
          </a>
        </motion.div> */}

      </div>
    </section>
  );
}