import { motion } from 'framer-motion';
import bannerSillasImg from '../assets/3sillas-ctabanner.png';

const WHATSAPP_NUMBER = "523332222490";

export default function BannerCtaSillas() {
  const message = encodeURIComponent(
    "¡Hola G MOB! Me interesa cotizar modelos de sillas ergonómicas para mi empresa."
  );
  const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  // Data de las 3 sillas a mostrar en la composición derecha
  

  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 lg:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* TARJETA PRINCIPAL TIPO BANNER */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#18181B] via-gmob-dark to-[#0F0F11] border border-white/10 shadow-premium overflow-hidden">
        
        {/* Glows y Luces de Fondo (Efecto Neón GMOB) */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gmob-red/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Malla sutil de fondo */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[420px] lg:min-h-[460px]">
          
          {/* ==================== COLUMNA IZQUIERDA: TEXTO & CTA ==================== */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start text-left"
          >
            

            {/* Título Principal Tipografía Spartan/Montserrat de GMOB */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-spartan text-white tracking-tight !leading-[1.3] mb-12">
              EQUIPEMOS TU OFICINA O NEGOCIO {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gmob-red to-red-500">
                HOY MISMO
              </span>
            </h2>

            

            {/* Botón CTA con animación Hover */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={wpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-gmob-red to-red-700 text-white font-montserrat font-extrabold text-lg tracking-wide shadow-red-glow hover:shadow-red-600/50 transition-all duration-300"
            >
              <span>Cotiza ahora</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>


          {/* COLUMNA DERECHA: */}
          <div className="lg:col-span-5 h-full min-h-[320px] sm:min-h-[380px] lg:min-h-full relative flex items-center justify-center p-6 lg:p-8">
            
            {/* Luces flotantes detrás de la imagen */}
            <div className="absolute w-72 h-72 bg-gmob-red/30 rounded-full blur-3xl pointer-events-none" />

            {/* Imagen Única de las 3 Sillas */}
            <div className="relative w-full max-w-lg flex items-center justify-center py-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src={bannerSillasImg}
                alt="Modelos de sillas ergonómicas G MOB"
                className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}