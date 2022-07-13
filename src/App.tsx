import Nav from './components/Nav/Nav';
import styles from './App.module.scss';
import Splash from 'components/Splash/Splash';

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <Splash />
    </div>
  );
}

export default App;
