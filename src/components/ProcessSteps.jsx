import { motion } from 'framer-motion';

// Número corporativo de WhatsApp
const WHATSAPP_NUMBER = "523332222490";

export default function ProcessSteps() {
  const message = encodeURIComponent(
    "¡Hola G MOB! Vengo de la web y me gustaría iniciar con el Paso 1 para cotizar mi espacio."
  );
  const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  // Pasos estructurados según las especificaciones de GMOB
  const steps = [
    {
      number: "01",
      title: "Cotización y Asesoría",
      desc: "Contáctanos por WhatsApp. Compártenos tus necesidades o el plano/layout de tu espacio.",
      badge: "Paso 1",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Showroom o Muestra en Sitio",
      desc: "Agenda tu cita en nuestro showroom en Guadalajara para probar el mobiliario, o solicita una muestra física a préstamo.",
      badge: "Paso 2",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Entrega e Instalación Propias",
      desc: "Recibe tu mobiliario en la ZMG con nuestro equipo de flete e instalación sin costo adicional (o envío a todo México).",
      badge: "Paso 3",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-white to-[#d12a2a]/15 relative overflow-hidden">
      {/* Luces/Glows decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-gmob-red/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-gmob-red/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-24">
          {/* Tag superior */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gmob-red/10 border border-gmob-red/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gmob-red animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gmob-red font-montserrat">
              Proceso Sencillo
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-spartan text-gmob-dark tracking-normal !leading-[1.2] mb-6 uppercase"
          >
            Amueblar tu espacio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gmob-red to-red-800">
              nunca fue tan sencillo
            </span>
          </motion.h2>

          {/* Línea divisoria decorativa con acento rojo */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1.5 bg-gradient-to-r from-gmob-red to-red-700 rounded-full mx-auto mb-6"
          />

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg font-sans text-gmob-gray leading-relaxed max-w-2xl mx-auto"
          >
            Un proceso transparente y eficiente diseñado para{" "}
            <strong className="text-gmob-dark font-semibold">empresas, arquitectos y particulares</strong>.
          </motion.p>
        </div>

        {/* ==================================================================== */}
        {/* GRILLA DE PASOS / TARJETAS                                           */}
        {/* ==================================================================== */}
        <div className="relative">
          {/* Línea Conectora sutil visible en pantallas desktop */}
          <div className="hidden lg:block absolute top-[108px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-gray-200 via-gmob-red/40 to-gray-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 shadow-premium border border-gray-100/80 hover:border-gmob-red/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Glow inferior en Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-gmob-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Encabezado de la Tarjeta con Número Flotante e Ícono */}
                  <div className="flex items-center justify-between mb-8 relative">
                    {/* Badge con Ícono */}
                    <div className="w-14 h-14 rounded-2xl bg-gmob-light text-gmob-red group-hover:bg-gmob-red group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm group-hover:shadow-gmob-red/30">
                      {step.icon}
                    </div>

                    {/* Indicador de Número de Paso */}
                    <div className="px-4 py-1.5 rounded-full bg-gray-100 group-hover:bg-gmob-red/10 text-gmob-dark group-hover:text-gmob-red font-montserrat font-extrabold text-sm transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Título del Paso */}
                  <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-gmob-dark mb-4 group-hover:text-gmob-red transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Descripción del Paso */}
                  <p className="text-sm sm:text-base font-sans text-gmob-gray leading-relaxed mb-8">
                    {step.desc}
                  </p>
                </div>

                {/* Sub-indicador decorativo de avance */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold font-montserrat uppercase tracking-wider text-gray-400 group-hover:text-gmob-red transition-colors duration-300">
                    {step.badge}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-gmob-red transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}