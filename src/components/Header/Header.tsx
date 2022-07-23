import { useState } from 'react';
import Container from 'components/Container/Container';
import styles from './Header.module.scss';
import logo from 'img/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false)

  return (
    <nav>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.menu}>
            <div className={styles.logo}>
              <a href="/">
                <img src={logo} alt="logo_name" />
              </a>
            </div>
            <button className={styles.hamburger} onClick={() => {setIsNavActive(!isNavActive)}}>
              <FontAwesomeIcon icon={isNavActive ? faXmark : faBars} />
            </button>
          </div>
          <div className={isNavActive ? `${styles.items} ${styles.active}` : styles.items}>
            <div className={styles.items__link}>
              <a href="#stackingCard" onClick={()=>{setIsNavActive(false)}}>Oferta</a>
              <a href="#gallery" onClick={()=>{setIsNavActive(false)}}>Galeria</a>
              <a href="#contact" onClick={()=>{setIsNavActive(false)}}>Kontakt</a>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header