import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-2 space-y-4">
            <img
              src={logoImg}
              alt="G MOB Logo"
              className="h-10 w-auto brightness-200"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p className="text-gray-400 text-sm max-w-md leading-relaxed font-sans">
              Soluciones integrales de mobiliario ergonómico para oficinas, desarrollos corporativos y proyectos de alto nivel. Calidad, garantía y diseño excepcional.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold font-montserrat text-white mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li><a href="#desarrollos" className="hover:text-gmob-red transition">Desarrollos</a></li>
              <li><a href="#nosotros" className="hover:text-gmob-red transition">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-gmob-red transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold font-montserrat text-white mb-3">Atención</h4>
            <p className="text-sm text-gray-400 mb-2 font-sans">Zona Metropolitana de Guadalajara (ZMG)</p>
            <p className="text-sm text-gray-400 font-sans">Ventas directas y mayoreo.</p>
          </div>

        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} G MOB. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Mobiliario | Diseño | Espacios</p>
        </div>
      </div>
    </footer>
  );
}