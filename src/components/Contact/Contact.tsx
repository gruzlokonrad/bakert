import Container from 'components/Container/Container';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <div className={styles.contact}>
          <h2 className={styles.header}>Kontakt</h2>
          <div className={styles.contact__content}>
            <div className={styles.contact__info}>
              <a href="tel:+48 886 555 202">
                <div className={styles.contact__icon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <p>
                  +48 886 555 202
                </p>
              </a>
            </div>
            <div className={styles.contact__info}>
              <a href="mailto:konrad.grzelewski@bakert.pl?subject='Pytanie o usługę'">
                <div className={styles.contact__icon}>
                  <FontAwesomeIcon icon={faAt} />
                </div>
                <p>
                  konrad.grzelewski@bakert.pl
                </p>
              </a>
            </div>
            <div className={styles.contact__info}>
              <a href="https://goo.gl/maps/nK77ddqPLkvRjGvU7" target="_blank">
              <div className={styles.contact__icon}>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <p>
                Dąbrowa 16a <br />42-110 Dąbrowa
              </p>
            </a>
          </div>
          <div className={styles.contact__info}>
            <a href="https://www.facebook.com/Bakert-109039317724110/" target="_blank">
              <div className={styles.contact__icon}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <p>
                Facebook
              </p>
            </a>
          </div>
        </div>
      </div>
    </Container>
    </section >
  )
}

export default Contact