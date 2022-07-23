import styles from './OfferItem.module.scss';

const OfferFirst = ({content}:any) => {

  const { title, text} = content;
  return (
    <div className={styles.offerItem}>
      <div>
        <h2>
          {title}
        </h2>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default OfferFirst