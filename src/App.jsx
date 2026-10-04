import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import BestSellers from './components/BestSellers';
import ProjectSolutions from './components/ProjectSolutions';
import RestaurantSolutions from './components/RestaurantSolutions';
import OutdoorSolutions from './components/OutdoorSolutions';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f6] text-gray-900 font-sans selection:bg-gmob-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <BestSellers />
        <ProjectSolutions />
        <RestaurantSolutions />
        <OutdoorSolutions />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}