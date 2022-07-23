import styles from './App.module.scss';
import Header from './components/Header/Header';
import Splash from 'components/Splash/Splash';
import Offer from 'components/Offer/Offer';
import Gallery from 'components/Gallery/Gallery';
import Footer from 'components/Footer/Footer';
import Contact from 'components/Contact/Contact';
import StackingCard from 'components/StackingCard/StackingCard';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Splash />
      <StackingCard />
      <Offer />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

