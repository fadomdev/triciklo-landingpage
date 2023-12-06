import './App.css';
import './styles/styles.css'
import BarraNavegacion from './components/Nav';
import HeroBanner from './components/BannerTriciklo';
import Quehacemos from './components/QueHacemos';
import Nosotros from './components/Nosotros';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clientes from './components/Clientes';
import Footer from './components/Footer';
import MySwiperComponent from './components/BrandSlider';




function App() {
  return (
    <div className="App container">
      <BarraNavegacion />
      <HeroBanner />
      <Quehacemos />
      <Nosotros />
      <Clientes />
      <MySwiperComponent />
      <Footer />
    </div>
  );
}

export default App;
