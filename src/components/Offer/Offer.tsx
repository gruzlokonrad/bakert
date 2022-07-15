import Container from 'container/Container';
import Item from './Item/Item';
import styles from './Offer.module.scss';

const Offer = () => {
  return (
    <section>
      <Container>
        <div className={styles.offer}>
            <Item />
            <Item />
            <Item />
        </div>
      </Container>
    </section>
  )
}

export default Offer