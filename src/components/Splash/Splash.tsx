import styles from './Splash.module.scss';
import logo from 'img/logo_w.png';
import Container from 'container/Container';

const Splash = () => {
  return (
    <section className={styles.splash}>
      <div className={styles.splash__content}>
        <img src={logo} alt="bakert logo" />
        <hr />
        <p>
          Pilotaż pojazdów nienormatywnych
        </p>
      </div>
    </section>
  )
}

export default Splash