import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import PromoSection from './components/PromoSection';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <>
      <Navbar />
      <CartSidebar />
      <Hero />
      <MenuSection />
      <PromoSection />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
