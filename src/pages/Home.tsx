import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Triade from '../components/sections/Triade';
import SobreNos from '../components/sections/SobreNos';
import AreasAtuacao from '../components/sections/AreasAtuacao';
import Socios from '../components/sections/Socios';
import ArtigosNoticias from '../components/sections/ArtigosNoticias';
import NaMidia from '../components/sections/NaMidia';
import Ecossistema from '../components/sections/Ecossistema';
import InstitutoORA from '../components/sections/InstitutoORA';
import Portfolio from '../components/sections/Portfolio';
import Contato from '../components/sections/Contato';

const Home = () => {
  return (
    <div className="bg-navy-900 text-white">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Triade />
        <SobreNos />
        <AreasAtuacao />
        <Socios />
        <ArtigosNoticias />
        <NaMidia />
        <Ecossistema />
        <InstitutoORA />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
