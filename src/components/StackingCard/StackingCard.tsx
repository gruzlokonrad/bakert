import CardItem from './CardItem/CardItem';
import styles from './StackingCard.module.scss';


import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const StackingCard = () => {
  const array: { imgUrl: string, header: string, content: string, isReverse: boolean }[] = [
    {
      imgUrl: "https://picsum.photos/479/479?index=1",
      header: "Specialist drive",
      content: `DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path.`,
      isReverse: false
    },
    {
      imgUrl: "https://picsum.photos/479/479?index=2",
      header: "Create amazing SVG animations",
      content: `DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path.`,
      isReverse: true
    },
    {
      imgUrl: "https://picsum.photos/479/479?index=3",
      header: "Road and OFFroad",
      content: `DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path.`,
      isReverse: false
    },
    {
      imgUrl: "https://picsum.photos/479/479?index=4",
      header: "Truck and Trust ...",
      content: `DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path.`,
      isReverse: true
    }
  ]


  return (
    <section id="stackingCard">
      <div className={styles.stackingCard}>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <CardItem data={array[0]} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <CardItem data={array[1]} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <CardItem data={array[2]} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <CardItem data={array[3]} />
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default StackingCard