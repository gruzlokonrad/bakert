import { useState } from 'react';
import styles from './Gallery.module.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
  const galleryArr = [];
  for (let i = 0; i < 7; i++) {
    galleryArr.push(i + 1);
  }


  return (
    <section className={styles.gallerySection}>
      <Carousel
      showArrows={true}
      dynamicHeight={true}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      >
        {galleryArr.map((el: any, index: any) => {
          let imgLink = require(`img/gallery/${el}.jpg`);
          return (
            <div key={index}>
              <img src={imgLink} alt={`bakert_work_img${el}`} />
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}

export default Gallery