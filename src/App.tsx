import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BurningTours from './components/BurningTours';
import Destinations from './components/Destinations';
import WhyUs from './components/WhyUs';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BurningTours />
      <Destinations />
      <WhyUs />
      <MobileNav />
    </div>
  );
}

export default App;
