import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ----------------------------------------------------------------------
// IMPORTACIÓN DE ASSETS (Imágenes y Fichas Técnicas)
// ----------------------------------------------------------------------
// Sillas
import cantabriaImg from '../assets/best-sellers/sillas/cantabria.png';
import cantabriaFicha from '../assets/best-sellers/sillas/cantabria-ficha.jpg';
import ecochairImg from '../assets/best-sellers/sillas/ecochair.png';
import ecochairFicha from '../assets/best-sellers/sillas/ecochair-ficha.png';
import ecogerencialImg from '../assets/best-sellers/sillas/ecogerencial.png';
import ecogerencialFicha from '../assets/best-sellers/sillas/ecogerencial-ficha.png';
import economallaImg from '../assets/best-sellers/sillas/economalla.png';
import economallaFicha from '../assets/best-sellers/sillas/economalla-ficha.png';
import ohi46Img from '../assets/best-sellers/sillas/ohi-46.png';
import ohe195Img from '../assets/best-sellers/sillas/ohe-195.png';

// Ejecutivas
import vantoImg from '../assets/best-sellers/ejecutivas/vanto.png';
import vantoFicha from '../assets/best-sellers/ejecutivas/vanto-ficha.png';
import goetzImg from '../assets/best-sellers/ejecutivas/goetz.png';
import goetzFicha from '../assets/best-sellers/ejecutivas/goetz-ficha.png';
import blazeImg from '../assets/best-sellers/ejecutivas/blaze.png';
import blazeFicha from '../assets/best-sellers/ejecutivas/blaze-ficha.png';
import snapImg from '../assets/best-sellers/ejecutivas/snap.png';
import snapFicha from '../assets/best-sellers/ejecutivas/snap-ficha.png';
import netImg from '../assets/best-sellers/ejecutivas/net.png';
import netFicha from '../assets/best-sellers/ejecutivas/net-ficha.png';
import khudiImg from '../assets/best-sellers/ejecutivas/khudi.png';
import khudiFicha from '../assets/best-sellers/ejecutivas/khudi-ficha.png';

// Bancos
import wayImg from '../assets/best-sellers/bancos/way.png';
import wayFicha from '../assets/best-sellers/bancos/way-ficha.png';
import arneImg from '../assets/best-sellers/bancos/arne.png';
import arneFicha from '../assets/best-sellers/bancos/arne-ficha.png';
import sencillaBancoImg from '../assets/best-sellers/bancos/sencilla.png';
import sencillaBancoFicha from '../assets/best-sellers/bancos/sencilla-ficha.png';
import milosImg from '../assets/best-sellers/bancos/milos.png';
import milosFicha from '../assets/best-sellers/bancos/milos-ficha.png';
import rueImg from '../assets/best-sellers/bancos/rue.png';
import rueFicha from '../assets/best-sellers/bancos/rue-ficha.png';
import alphaImg from '../assets/best-sellers/bancos/alpha.png';
import alphaFicha from '../assets/best-sellers/bancos/alpha-ficha.png';

// Exterior
import teksiImg from '../assets/best-sellers/exterior/teksi.png';
import teksiFicha from '../assets/best-sellers/exterior/teksi-ficha.png';
import kipaliImg from '../assets/best-sellers/exterior/kipali.png';
import kipaliFicha from '../assets/best-sellers/exterior/kipali-ficha.png';
import sencillaExteriorImg from '../assets/best-sellers/exterior/sencilla.png';
import sencillaExteriorFicha from '../assets/best-sellers/exterior/sencilla-ficha.png';
import oceanImg from '../assets/best-sellers/exterior/ocean.png';
import oceanFicha from '../assets/best-sellers/exterior/ocean-ficha.png';

// Sillones
import fabriziaohmImg from '../assets/best-sellers/sillones/fabriziaohm.png';
import fabriziaohmFicha from '../assets/best-sellers/sillones/fabriziaohm-ficha.png';
import isabelaohmImg from '../assets/best-sellers/sillones/isabelaohm.png';

// Escritorios
import araohm17Img from '../assets/best-sellers/escritorios/araohm17.png';
import dragonImg from '../assets/best-sellers/escritorios/dragon.png';

// Número corporativo
const WHATSAPP_NUMBER = "523332222490"; 

export default function BestSellers() {
    const [activeCategory, setActiveCategory] = useState('Sillas');
    const [activeFicha, setActiveFicha] = useState(null);

    // Cerrar el visor con la tecla ESC
    useEffect(() => {
      const onKey = (e) => e.key === 'Escape' && setActiveFicha(null);
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, []);

  // Categorías del filtro
  const categories = ['Sillas', 'Ejecutivas', 'Bancos', 'Exterior', 'Sillones', 'Escritorios'];

  // Base de datos de productos
  const products = [
    // ------------------------------------------------------------------
    // CATEGORÍA: SILLAS
    // ------------------------------------------------------------------
    {
      id: 'cantabria',
      category: 'Sillas',
      name: 'CANTABRIA',
      price: '2,199.00',
      image: cantabriaImg,
      ficha: cantabriaFicha,
    },
    {
      id: 'ecochair',
      category: 'Sillas',
      name: 'ECOCHAIR',
      price: '1,399.00',
      image: ecochairImg,
      ficha: ecochairFicha,
    },
    {
      id: 'ecogerencial',
      category: 'Sillas',
      name: 'ECOGERENCIAL',
      price: '2,199.00',
      image: ecogerencialImg,
      ficha: ecogerencialFicha,
    },
    {
      id: 'economalla',
      category: 'Sillas',
      name: 'ECONOMALLA',
      price: '1,899.00',
      image: economallaImg,
      ficha: economallaFicha,
    },
    {
      id: 'ohi-46',
      category: 'Sillas',
      name: 'OHI-46',
      price: '3,398.00',
      image: ohi46Img,
      ficha: null,
    },
    {
      id: 'ohe-195',
      category: 'Sillas',
      name: 'OHE-195',
      price: '749.00',
      image: ohe195Img,
      ficha: null,
    },

    // ------------------------------------------------------------------
    // CATEGORÍA: EJECUTIVAS
    // ------------------------------------------------------------------
    {
      id: 'vanto',
      category: 'Ejecutivas',
      name: 'VANTO',
      price: '15,399.00',
      image: vantoImg,
      ficha: vantoFicha,
    },
    {
      id: 'goetz',
      category: 'Ejecutivas',
      name: 'GOETZ',
      price: '9,999.00',
      image: goetzImg,
      ficha: goetzFicha,
    },
    {
      id: 'blaze',
      category: 'Ejecutivas',
      name: 'BLAZE',
      price: '5,999.00',
      image: blazeImg,
      ficha: blazeFicha,
    },
    {
      id: 'snap',
      category: 'Ejecutivas',
      name: 'SNAP',
      price: '8,999.00',
      image: snapImg,
      ficha: snapFicha,
    },
    {
      id: 'net',
      category: 'Ejecutivas',
      name: 'NET',
      price: '5,999.00',
      image: netImg,
      ficha: netFicha,
    },
    {
      id: 'khudi',
      category: 'Ejecutivas',
      name: 'KHUDI',
      price: '7,999.00',
      image: khudiImg,
      ficha: khudiFicha,
    },

    // ------------------------------------------------------------------
    // CATEGORÍA: BANCOS
    // ------------------------------------------------------------------
    {
      id: 'banco-way',
      category: 'Bancos',
      name: 'WAY',
      price: '999.00',
      image: wayImg,
      ficha: wayFicha,
    },
    {
      id: 'banco-arne',
      category: 'Bancos',
      name: 'ARNE',
      price: '549.00',
      image: arneImg,
      ficha: arneFicha,
    },
    {
      id: 'banco-sencilla',
      category: 'Bancos',
      name: 'SENCILLA',
      price: '1,999.00',
      image: sencillaBancoImg,
      ficha: sencillaBancoFicha,
    },
    {
      id: 'banco-milos',
      category: 'Bancos',
      name: 'MILOS',
      price: '2,149.00',
      image: milosImg,
      ficha: milosFicha,
    },
    {
      id: 'banco-rue',
      category: 'Bancos',
      name: 'RUE',
      price: '2,099.00',
      image: rueImg,
      ficha: rueFicha,
    },
    {
      id: 'banco-alpha',
      category: 'Bancos',
      name: 'ALPHA',
      price: '3,399.00',
      image: alphaImg,
      ficha: alphaFicha,
    },

    // ------------------------------------------------------------------
    // CATEGORÍA: EXTERIOR
    // ------------------------------------------------------------------
    {
      id: 'exterior-teksi',
      category: 'Exterior',
      name: 'TEKSI',
      price: '1,069.00',
      image: teksiImg,
      ficha: teksiFicha,
    },
    {
      id: 'exterior-kipali',
      category: 'Exterior',
      name: 'KIPALI',
      price: '1,069.00',
      image: kipaliImg,
      ficha: kipaliFicha,
    },
    {
      id: 'exterior-sencilla',
      category: 'Exterior',
      name: 'SENCILLA',
      price: '1,599.00',
      image: sencillaExteriorImg,
      ficha: sencillaExteriorFicha,
    },
    {
      id: 'exterior-ocean',
      category: 'Exterior',
      name: 'OCEAN',
      price: '729.00',
      image: oceanImg,
      ficha: oceanFicha,
    },

    // ------------------------------------------------------------------
    // CATEGORÍA: SILLONES
    // ------------------------------------------------------------------
    {
      id: 'sillon-fabriziaohm',
      category: 'Sillones',
      name: 'FABRIZIA OHM',
      price: '4,299.00',
      image: fabriziaohmImg,
      ficha: fabriziaohmFicha,
    },
    {
      id: 'sillon-isabelaohm',
      category: 'Sillones',
      name: 'ISABELA OHM',
      price: '3,899.00',
      image: isabelaohmImg,
      ficha: null,
    },

    // ------------------------------------------------------------------
    // CATEGORÍA: ESCRITORIOS
    // ------------------------------------------------------------------
    {
      id: 'escritorio-araohm17',
      category: 'Escritorios',
      name: 'ARA OHM 17',
      price: '5,499.00',
      image: araohm17Img,
      ficha: null,
    },
    {
      id: 'escritorio-dragon',
      category: 'Escritorios',
      name: 'DRAGON',
      price: '6,299.00',
      image: dragonImg,
      ficha: null,
    },
  ];

  // Filtramos los productos según la categoría activa
  const filteredProducts = products.filter((item) => item.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 sm:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold font-spartan text-black tracking-tight"
          >
            Best Sellers
          </motion.h2>
        </div>

        {/* TABS / FILTROS ESTILO PILL */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2 custom-scrollbar">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex bg-gray-200/70 p-2 rounded-full"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 text-base sm:text-lg font-medium font-sans rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-black shadow-sm'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* GRID DE PRODUCTOS */}
        {/* GRID / CARRUSEL DE PRODUCTOS */}
        <div className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-6 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 custom-scrollbar">
          <AnimatePresence mode="popLayout">
            
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const message = encodeURIComponent(`¡Hola G MOB! Vengo de la web y me gustaría recibir más información o cotizar el modelo ${product.name}.`);
                const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

                return (
                  
                  <motion.a
                    href={wpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    
                    key={product.id}
                    className="group bg-white rounded-3xl p-5 flex flex-col shadow-sm border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 cursor-pointer relative shrink-0 snap-start w-[78vw] sm:w-[55vw] md:w-[42vw] lg:w-auto"
                  >

                    {/* CONTENEDOR DE IMAGEN */}
                    <div className="relative w-full h-72 sm:h-80 bg-gray-50 rounded-2xl overflow-hidden mb-5 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={`Silla ${product.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />

                      {/* BOTÓN: VER FICHA TÉCNICA (abre visor fullscreen) */}
                      {product.ficha && (
                        <button
                          type="button"
                          aria-label={`Ver ficha técnica de ${product.name}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveFicha(product);
                          }}
                          className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-wider font-bold text-gray-700 px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                        >
                          <span>🔍</span> Ver Ficha
                        </button>
                      )}
                      
                    </div>

                    {/* DETALLES DEL PRODUCTO */}
                    <div className="flex justify-between items-end mt-auto">
                      <div>
                        <h3 className="text-lg font-bold font-montserrat text-black tracking-wide group-hover:text-gmob-red transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-baseline space-x-2 mt-1">
                          <span className="text-xl font-bold font-sans text-[#5cab3b]">
                            ${product.price}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide">
                            MXN + IVA
                          </span>
                        </div>
                      </div>

                      {/* BOTÓN ROJO DE FLECHA */}
                      <div className="bg-gmob-red text-white p-2.5 rounded-full shadow-md group-hover:bg-gmob-red-hover group-hover:shadow-red-glow transform group-hover:translate-x-1 transition-all duration-300">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="w-full text-center py-20"
              >
                <p className="text-gray-500 font-sans text-lg">
                  Próximamente agregaremos modelos a esta categoría.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* VISOR FULLSCREEN DE FICHA TÉCNICA (click en "Ver Ficha") */}
      <AnimatePresence>
        {activeFicha && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveFicha(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center justify-center overflow-hidden"
            >
              {/* BOTÓN CERRAR (X) */}
              <button
                type="button"
                aria-label="Cerrar ficha técnica"
                onClick={() => setActiveFicha(null)}
                className="absolute top-3 right-3 z-20 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* ETIQUETA */}
              <div className="absolute top-4 left-4 bg-black/70 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow z-10">
                Ficha Técnica
              </div>

              {/* IMAGEN FULLSCREEN */}
              <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 overflow-auto custom-scrollbar">
                <img
                  src={activeFicha.ficha}
                  alt={`Ficha Técnica ${activeFicha.name}`}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-md select-none"
                  draggable={false}
                />
              </div>

              {/* NOMBRE */}
              <h4 className="pb-4 text-base font-bold font-montserrat text-gray-900 tracking-wide uppercase text-center px-4">
                {activeFicha.name}
              </h4>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </section>
  );
}