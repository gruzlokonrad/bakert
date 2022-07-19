import Container from 'container/Container';
import Item from './Item/Item';
import styles from './Offer.module.scss';

const Offer = () => {
  return (
    <section id="offer">
      <Container>
        <div className={styles.offer}>
          <Item />
        </div>
      </Container>
    </section>
  )
}

export default Offer