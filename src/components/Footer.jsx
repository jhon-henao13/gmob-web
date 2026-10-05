import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Imports de Assets
import logoImg from '../assets/logo.png';
import offihoBlackImg from '../assets/offiho-black.png';
import offihoItalyImg from '../assets/offiho-italy.png';

// Constantes de Contacto
const PHONE_NUMBER = "3332222490";
const PHONE_DISPLAY = "+52 (333) 222 2490";
const WHATSAPP_LINK = `https://wa.me/52${PHONE_NUMBER}?text=${encodeURIComponent("¡Hola GMOB! Me gustaría recibir información y cotizar mobiliario para mi proyecto.")}`;
const ADDRESS = "Calz de las Palmas 60, Las Conchas, 44460 Guadalajara, Jal.";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const INSTAGRAM_LINK = "https://www.instagram.com/gmob.mx/";
const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61593144964163#";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="relative bg-gradient-to-b from-[#121214] via-[#0E0E10] to-[#070708] text-gray-300 font-sans border-t border-white/10 overflow-hidden">
      
      {/* Luz ambiental de fondo en el footer (Glow rojo GMOB) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gmob-red/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* GRID DE 4 COLUMNAS (Réplica exacta de la estructura pero elevada) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* ==================== COLUMNA 1: LOGO, FRASE Y REDES ==================== */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            
            {/* Logo con invert/brightness para pasar logo.png (negro) a blanco radiante */}
            <a href="#" className="inline-block group">
              <img 
                src={logoImg} 
                alt="GMOB - Mobiliario Corporativo" 
                className="h-16 sm:h-20 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Frase / Descripción de Marca */}
            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-sm">
              Especialistas en mobiliario de oficina, ergonomía avanzada y soluciones integrales de diseño corporativo en Guadalajara. Transformamos tu espacio de trabajo.
            </p>

            {/* Iconos de Redes Sociales */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de GMOB"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 hover:border-transparent transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de GMOB"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de GMOB"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-emerald-600 hover:border-transparent transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </motion.a>
            </div>

          </div>


          {/* ==================== COLUMNA 2: NAVEGACIÓN ==================== */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-white font-spartan font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gmob-red" />
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm font-montserrat">
              {[
                { name: "Sillas Ergonómicas", href: "#sillas" },
                { name: "Mobiliario Oficina", href: "#oficina" },
                { name: "Exterior y Terraza", href: "#exterior" },
                { name: "Restaurante y Bar", href: "#restaurante" },
                { name: "Showroom", href: "#showroom" },
                { name: "Cotizar Proyecto", href: WHATSAPP_LINK, external: true }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* ==================== COLUMNA 3: CONTACTO DIRECTO ==================== */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white font-spartan font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gmob-red" />
              Contacto Directo
            </h3>

            {/* Teléfono */}
            <div className="flex items-start gap-3 text-sm">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gmob-red shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-montserrat">Atención Telefónica / WhatsApp:</span>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-white font-bold font-montserrat hover:text-red-400 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Dirección Showroom */}
            <div className="flex items-start gap-3 text-sm">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gmob-red shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-montserrat">Showroom Guadalajara:</span>
                <a 
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors leading-snug block text-xs sm:text-sm mt-0.5"
                >
                  {ADDRESS}
                </a>
              </div>
            </div>
          </div>


          {/* ==================== COLUMNA 4: SERVICIO & ASESORÍA CORPORATIVA ==================== */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white font-spartan font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gmob-red" />
              Proyectos & Envíos
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              Equipamos empresas, oficinas corporativas, restaurantes y espacios comerciales en la ZMG y con cobertura a todo México.
            </p>

            {/* Target Highlight Box (Simil la caja de Servicio Móvil del ejemplo) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gmob-red/20 rounded-full blur-xl group-hover:bg-gmob-red/40 transition-all duration-300" />
              
              <div className="flex items-start gap-2.5 relative z-10">
                <span className="text-amber-400 text-sm">⚡</span>
                <p className="text-xs text-gray-300 leading-snug font-montserrat">
                  <strong className="text-white font-semibold">Asesoría personalizada 365 días:</strong> Cotiza por volumen con entrega e instalación garantizada en Jalisco.
                </p>
              </div>
            </div>
          </div>

        </div>


        {/* ==================== FILA INFERIOR: MARCAS Y COPYRIGHT ==================== */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-xs text-gray-400 font-montserrat text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">GMOB</span> (G MOB Guadalajara). Todos los derechos reservados.
          </div>

          {/* Logos de Distribuidor Respaldado (Offiho Black & Offiho Italy) */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-3 py-2 rounded-2xl backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-montserrat hidden sm:inline">
              Distribuidor Autorizado:
            </span>
            <div className="flex items-center gap-2">
              {/* Offiho Black Box */}
              <div className="h-16 bg-[#18181B] px-1 py-1 rounded-lg border border-white/10 flex items-center justify-center">
                <img 
                  src={offihoBlackImg} 
                  alt="Offiho Black" 
                  className="h-full w-auto object-contain filter invert brightness-200 rounded-lg"
                />
              </div>

              {/* Offiho Italy Box */}
              <div className="h-12 bg-white px-2.5 py-1 rounded-lg flex items-center justify-center shadow-sm">
                <img 
                  src={offihoItalyImg} 
                  alt="Offiho Italy" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Enlace Política de Privacidad */}
          <div>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-xs text-gray-400 hover:text-gmob-red underline underline-offset-4 transition-colors font-montserrat cursor-pointer"
            >
              Política de Privacidad
            </button>
          </div>

        </div>

      </div>


      {/* ==================== MODAL POLÍTICA DE PRIVACIDAD ==================== */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#18181B] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto text-left"
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold font-spartan text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gmob-red" />
                Aviso y Política de Privacidad - GMOB
              </h2>

              <div className="text-xs sm:text-sm text-gray-300 space-y-4 font-sans leading-relaxed">
                <p>
                  En <strong>GMOB (G MOB)</strong>, ubicado en Calz de las Palmas 60, Las Conchas, 44460 Guadalajara, Jal., protegemos y garantizamos el tratamiento confidencial de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                </p>

                <h3 className="font-bold text-white text-sm">1. Uso de la Información</h3>
                <p>
                  Los datos recolectados a través de nuestros formularios y canales de atención por WhatsApp o teléfono son utilizados exclusivamente para:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>Elaboración y envío de cotizaciones de mobiliario corporativo.</li>
                  <li>Coordinación de entregas e instalación en showroom o sitio del cliente.</li>
                  <li>Atención al cliente y seguimiento posventa.</li>
                </ul>

                <h3 className="font-bold text-white text-sm">2. Protección de Datos</h3>
                <p>
                  Sus datos no serán transferidos a terceros sin previo consentimiento explícito, salvaguardando la confidencialidad de su empresa en todo momento.
                </p>

                <p className="text-xs text-gray-500 pt-2 border-t border-white/10">
                  Última actualización: {new Date().getFullYear()}. Para dudas o aclaraciones contacte directamente a nuestro WhatsApp oficial: {PHONE_DISPLAY}.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-gmob-red hover:bg-red-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}