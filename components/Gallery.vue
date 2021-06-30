<template>
  <div id="gallery" class="gallery">
    <div class="gallery__items">
      <img src="/images/gallery/image1.jpg" alt="Photo of the restaurant" class="gallery__item">
      <img src="/images/gallery/image2.jpg" alt="Photo of the restaurant" class="gallery__item">
      <img src="/images/gallery/image3.jpg" alt="Photo of the restaurant" class="gallery__item">
      <img src="/images/gallery/image4.jpg" alt="Photo of the restaurant" class="gallery__item">
      <img src="/images/gallery/image1.jpg" alt="Photo of the restaurant" class="gallery__item">
      <img src="/images/gallery/image2.jpg" alt="Photo of the restaurant" class="gallery__item">
      <img src="/images/gallery/image3.jpg" alt="Photo of the restaurant" class="gallery__item">
      <img src="/images/gallery/image4.jpg" alt="Photo of the restaurant" class="gallery__item">
    </div>
  </div>
</template>

<script>
import SwiperGallery from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  mounted () {
    new SwiperGallery('.gallery', {
      wrapperClass: 'gallery__items',
      slideClass: 'gallery__item',
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 0,
      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        600: {
          slidesPerView: 3,
          slidesPerGroup: 1
        },
        1000: {
          slidesPerView: 4,
          slidesPerGroup: 1
        },
        1440: {
          slidesPerView: 5,
          slidesPerGroup: 1
        },
        1700: {
          slidesPerView: 6,
          slidesPerGroup: 1
        },
        2000: {
          slidesPerView: 8,
          slidesPerGroup: 1
        }
      },
      autoplay: {
        delay: 5000
      }
    })
  }
}
</script>

<style lang="scss">
.gallery {
  display: block;
  width: 100%;
  overflow: hidden;

  &__items {
    display: flex;
  }

  &__item {
    display: flex;
    margin: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
