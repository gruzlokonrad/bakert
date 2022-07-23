import Container from 'components/Container/Container';
import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <section className={styles.footer}>
          <p>
            Bakert © {year}
          </p>
        </section>
      </Container>
    </footer>
  )
}

export default Footer