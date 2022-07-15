import Nav from './components/Nav/Nav';
import styles from './App.module.scss';
import Splash from 'components/Splash/Splash';
import Offer from 'components/Offer/Offer';
import Gallery from 'components/Gallery/Gallery';
import Footer from 'components/Footer/Footer';
import Contact from 'components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <Splash />
      <Offer />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
