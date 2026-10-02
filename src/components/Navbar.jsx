import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importación del logo según la estructura
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Desarrollos', href: '#desarrollos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center group">
          <img
            src={logoImg}
            alt="G MOB - Mobiliario | Diseño | Espacios"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'h-12 sm:h-14' : 'h-16 sm:h-20'
            }`}
            onError={(e) => {
              // Fallback visual si la imagen aún no está en la carpeta assets
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden text-xl font-extrabold tracking-tight font-montserrat text-black">
            G MOB<span className="text-gmob-red">.</span>
          </div>
        </a>

        {/* NAV LINKS DESKTOP */}
        <nav className="hidden md:flex items-center space-x-14">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black font-semibold hover:text-gmob-red transition-colors duration-200 text-lg font-sans tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="https://wa.me/573000000000?text=Hola,%20quiero%20cotizar%20mobiliario%20G%20MOB"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gmob-red hover:bg-gmob-red-hover text-white font-extrabold px-5 py-3 rounded-lg shadow-md hover:shadow-red-glow transition-all duration-300 font-montserrat text-base tracking-wide"
          >
            Cotizar Ahora
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gmob-red focus:outline-none p-2"
            aria-label="Abrir Menú"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 font-medium hover:text-gmob-red py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20cotizar%20mobiliario%20G%20MOB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gmob-red text-white font-semibold py-3 rounded-lg w-full mt-2"
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}