import { motion } from 'framer-motion';

// Importación de las 3 sillas desde la carpeta de assets best-sellers
import ecochairImg from '../assets/best-sellers/sillas/ecochair.png';
import cantabriaImg from '../assets/best-sellers/sillas/cantabria.png';
import ecogerencialImg from '../assets/best-sellers/sillas/ecogerencial.png';

const WHATSAPP_NUMBER = "523332222490";

export default function BannerCtaSillas() {
  const message = encodeURIComponent(
    "¡Hola G MOB! Me interesa cotizar modelos de sillas ergonómicas para mi empresa."
  );
  const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  // Data de las 3 sillas a mostrar en la composición derecha
  const sillas = [
    {
      id: "ecochair",
      nombre: "Ecochair",
      tag: "Ergonómica Malla",
      img: ecochairImg,
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      delay: 0.2,
      scale: "scale-95 lg:scale-105",
      zIndex: "z-20",
    },
    {
      id: "ecogerencial",
      nombre: "Eco Gerencial",
      tag: "Top Ventas",
      img: ecogerencialImg,
      badgeColor: "bg-gmob-red/20 text-red-400 border-gmob-red/30",
      delay: 0.35,
      scale: "scale-100 lg:scale-110",
      zIndex: "z-30", // Destacada al centro
    },
    {
      id: "cantabria",
      nombre: "Cantabria",
      tag: "Alta Gama",
      img: cantabriaImg,
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      delay: 0.5,
      scale: "scale-95 lg:scale-105",
      zIndex: "z-10",
    },
  ];

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
            className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start text-left"
          >
            

            {/* Título Principal Tipografía Spartan/Montserrat de GMOB */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-spartan text-white tracking-tight !leading-[1.1] mb-4">
              ¿LISTO PARA EQUIPAR TU EMPRESA CON{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gmob-red to-red-500">
                SILLAS DE ALTA GAMA?
              </span>
            </h2>

            {/* Subtítulo informativo */}
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed mb-8 max-w-lg">
              Cotiza, confirma tus modelos ergonómicos ideales y asegura la salud e higiene postural de tu equipo hoy mismo.
            </p>

            {/* Botón CTA con animación Hover */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={wpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gmob-red to-red-700 text-white font-montserrat font-bold text-base tracking-wide shadow-red-glow hover:shadow-red-600/50 transition-all duration-300"
            >
              <span>Aparta tu cotización</span>
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
          <div className="lg:col-span-6 h-full min-h-[320px] sm:min-h-[380px] lg:min-h-full relative flex items-center justify-center p-6 lg:p-0">
            
            {/* Luces flotantes detrás de las sillas */}
            <div className="absolute w-72 h-72 bg-gmob-red/30 rounded-full blur-3xl pointer-events-none" />

            {/* Grid/Composición de las 3 Sillas */}
            <div className="relative w-full max-w-lg flex items-center justify-center gap-4 sm:gap-6 py-6">
              {sillas.map((silla) => (
                <motion.div
                  key={silla.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: silla.delay }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className={`relative flex-1 flex flex-col items-center group cursor-pointer ${silla.zIndex}`}
                >
                  {/* Tarjeta Glassmorphism para cada silla */}
                  <div className={`w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 sm:p-3 flex flex-col items-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-gmob-red/50 group-hover:shadow-red-glow/30 ${silla.scale}`}>
                    
                    
                    

                    {/* Contenedor e Imagen de la Silla */}
                    <div className="relative w-28 h-32 sm:w-36 sm:h-44 flex items-center justify-center my-1">
                      <img
                        src={silla.img}
                        alt={`Modelo ${silla.nombre} G MOB`}
                        className="max-w-full max-h-full object-contain rounded-xl filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Nombre de la Silla */}
                    <h3 className="text-xs sm:text-sm font-bold text-white font-montserrat text-center tracking-wide group-hover:text-red-400 transition-colors">
                      {silla.nombre}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}