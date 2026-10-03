import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ----------------------------------------------------------------------
// IMPORTACIÓN DE ASSETS (Imágenes y Fichas Técnicas)
// ----------------------------------------------------------------------
// Sillas
import cantabriaImg from '../assets/best-sellers/sillas/cantabria.png';
import cantabriaFicha from '../assets/best-sellers/sillas/cantabria-ficha.png';
import ecochairImg from '../assets/best-sellers/sillas/ecochair.png';
import ecochairFicha from '../assets/best-sellers/sillas/ecochair-ficha.png';
import ecogerencialImg from '../assets/best-sellers/sillas/ecogerencial.png';
import ecogerencialFicha from '../assets/best-sellers/sillas/ecogerencial-ficha.png';
import economallaImg from '../assets/best-sellers/sillas/economalla.png';
import economallaFicha from '../assets/best-sellers/sillas/economalla-ficha.png';
import ohi46Img from '../assets/best-sellers/sillas/ohi-46.png';
import ohe195Img from '../assets/best-sellers/sillas/ohe-195.png';

// Ejecutivas (Completas)
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


// Bancos (Descomentar al guardar las imágenes en src/assets/best-sellers/bancos/)
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


// Exterior (Descomentar al guardar las imágenes en src/assets/best-sellers/exterior/)
import teksiImg from '../assets/best-sellers/exterior/teksi.png';
import teksiFicha from '../assets/best-sellers/exterior/teksi-ficha.png';
import kipaliImg from '../assets/best-sellers/exterior/kipali.png';
import kipaliFicha from '../assets/best-sellers/exterior/kipali-ficha.png';
import sencillaExteriorImg from '../assets/best-sellers/exterior/sencilla.png';
import sencillaExteriorFicha from '../assets/best-sellers/exterior/sencilla-ficha.png';
import oceanImg from '../assets/best-sellers/exterior/ocean.png';
import oceanFicha from '../assets/best-sellers/exterior/ocean-ficha.png';


// Número corporativo (el mismo que usamos en el NavBar)
const WHATSAPP_NUMBER = "523332222490"; 

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState('Sillas');

  // Categorías del filtro
  const categories = ['Sillas', 'Ejecutivas', 'Bancos', 'Exterior', 'Sillones', 'Escritorios'];

  // Base de datos de productos
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
    // CATEGORÍA: BANCOS (Descomentar al añadir las imágenes en src/assets/best-sellers/bancos/)
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
    // CATEGORÍA: EXTERIOR (Descomentar al añadir las imágenes en src/assets/best-sellers/exterior/)
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
        <div className="flex justify-center mb-4 overflow-x-auto pb-2 custom-scrollbar">
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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                // Generar mensaje de WhatsApp dinámico
                const message = encodeURIComponent(`¡Hola G MOB! Vengo de la web y me gustaría recibir más información o cotizar el modelo ${product.name}.`);
                const wpLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

                return (
                  <motion.a
                    href={wpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={product.id}
                    className="group bg-white rounded-3xl p-5 flex flex-col shadow-sm border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 cursor-pointer"
                  >
                    {/* CONTENEDOR DE IMAGEN (Efecto Crossfade Ficha) */}
                    <div className="relative w-full h-72 sm:h-80 bg-gray-50 rounded-2xl overflow-hidden mb-5">
                      
                      {/* Imagen Principal */}
                      <img
                        src={product.image}
                        alt={`Silla ${product.name}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out z-10 ${
                          product.ficha ? 'group-hover:opacity-0' : 'group-hover:scale-110'
                        }`}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />

                      {/* Imagen Ficha Técnica (Aparece en Hover) */}
                      {product.ficha && (
                        <div className="absolute inset-0 bg-white z-0 flex items-center justify-center p-2">
                           <img
                            src={product.ficha}
                            alt={`Ficha Técnica ${product.name}`}
                            className="w-full h-full object-contain opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out delay-75"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        </div>
                      )}
                      
                      {/* Overlay sutil instruccional (opcional) */}
                      {product.ficha && (
                        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-[10px] uppercase tracking-wider font-bold text-gray-500 px-2 py-1 rounded shadow-sm opacity-100 group-hover:opacity-0 transition-opacity z-20">
                          Ver ficha
                        </div>
                      )}
                    </div>

                    {/* DETALLES DEL PRODUCTO */}
                    <div className="flex justify-between items-end mt-auto">
                      <div>
                        <h3 className="text-lg font-bold font-montserrat text-black tracking-wide group-hover:text-gmob-red transition-colors font-medium">
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
                className="col-span-full text-center py-20"
              >
                <p className="text-gray-500 font-sans text-lg">
                  Próximamente agregaremos modelos a esta categoría.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}