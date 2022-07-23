import Container from 'components/Container/Container';
import FlexItem from './OfferItem/OfferItem';
import styles from './Offer.module.scss';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Offer = () => {
  const offerContent: { title: string, text: string }[] = [
    {
      title: "Transport",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis soluta quasi obcaecati, minus quis sapiente labore quibusdam eaque. Impedit voluptate sequi repudiandae perferendis, quasi quisquam veritatis quia optio necessitatibus!"
    },
    {
      title: "Realizacja",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati temporibus illum dolores non ducimus sunt aliquid nostrum dolorem debitis fuga repellat atque ut commodi voluptatibus ratione culpa, voluptatem quasi delectus magnam laboriosam dolorum quibusdam? Consequuntur dolore alias magnam et nostrum eligendi at magni nulla exercitationem animi recusandae sunt enim soluta maxime accusantium blanditiis iste nemo inventore illum eaque ut, officiis dicta provident? Sed inventore repellat ratione laboriosam corrupti sunt animi provident, repellendus ut?"
    }
  ]

  return (
    <section>
      <Container>
        <div className={styles.offer}>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <FlexItem content={offerContent[0]} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <FlexItem content={offerContent[1]} />
          </AnimationOnScroll>
        </div>
      </Container>
    </section >
  )
}

export default Offer