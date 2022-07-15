import Container from 'container/Container';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <Container>
        <div className={styles.contact}>
          <div className={styles.contact__content}>
            Phone
            Email
            Address
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact