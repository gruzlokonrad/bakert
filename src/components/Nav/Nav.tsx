import Container from 'container/Container';
import styles from './Nav.module.scss';
import logo from 'img/logo.webp';

const Nav = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <a href="#">
              <img src={logo} alt="logo_name" />
            </a>
          </div>
          <div className={styles.items}>
            <ul>
              <li><a href="#">Oferta</a></li>
              <li><a href="#">Galeria</a></li>
              <li><a href="#">Kontakt</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Nav