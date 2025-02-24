
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import styles from "./Slider.module.scss";

// Lista di immagini e link agli articoli
const slides = [
  {
    id: 1,
    image: "https://via.placeholder.com/1232x480?text=Articolo+1",
    link: "/articolo-1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1232x480?text=Articolo+2",
    link: "/articolo-2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1232x480?text=Articolo+3",
    link: "/articolo-3",
  },
];

function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={32} // Spazio tra gli slide
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.image} alt={`Articolo ${slide.id}`} className={styles.slideImage} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
