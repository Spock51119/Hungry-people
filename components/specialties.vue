<template>
  <section class="specialties">
    <div class="specialties__wrapper wrapper">
      <h2 class="team__label label">
        specialties
      </h2>
      <div class="specialties__swiper">
        <div class="specialties__swiper-items">
          <div class="specialties__item">
            <div class="specialties__illustration illustration">
              <img src="/images/SpecialtiesIll.jpg" alt="illustrations for team us" class="specialties__image illustration__image">
            </div>
            <div class="specialties__text text-block">
              <h2 class="specialties__title title-section">
                chocolate pancakes 2
              </h2>
              <p class="specialties__description description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
              </p>
              <p class="specialties__text-content text-content">
                Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
              </p>
            </div>
          </div>
          <div class="specialties__item">
            <div class="specialties__illustration illustration">
              <img src="/images/SpecialtiesIll.jpg" alt="illustrations for team us" class="specialties__image illustration__image">
            </div>
            <div class="specialties__text text-block">
              <h2 class="specialties__title title-section">
                chocolate pancakes
              </h2>
              <p class="specialties__description description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
              </p>
              <p class="specialties__text-content text-content">
                Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
              </p>
            </div>
          </div>
          <div class="specialties__item">
            <div class="specialties__illustration illustration">
              <img src="/images/SpecialtiesIll.jpg" alt="illustrations for team us" class="specialties__image illustration__image">
            </div>
            <div class="specialties__text text-block">
              <h2 class="specialties__title title-section">
                chocolate pancakes 3
              </h2>
              <p class="specialties__description description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
              </p>
              <p class="specialties__text-content text-content">
                Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </div>
  </section>
</template>

<script>
import SwiperTest, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperTest.use([Pagination])

export default {
  mounted () {
    new SwiperTest('.specialties__swiper', {
      wrapperClass: 'specialties__swiper-items',
      slideClass: 'specialties__item',
      dynamicMainBullets: 3,
      initialSlide: 1,
      loop: true,
      clickableClass: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss">
.specialties {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/specialtyBG.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__wrapper {
    position: relative;
    display: flex;
    padding: 100px 0;
    overflow: hidden;
  }

  &__swiper {
    display: block;
    width: 100%;
  }

  &__swiper-items {
    display: flex;
  }

  &__item {
    display: flex;
    flex-shrink: 0;
  }

  &__label {
    position: absolute;
    top: 35px;
    display: block;
    width: 100%;
    color: #fff;
  }

  &__text {
    padding-left: 40px;
    color: #fff;
  }

  // &__title {
  // }

  // &__description {
  // }

  // &__text-content {
  // }

  &__illustration {
    &::before {
      left: 0;
      right: auto;
    }
  }

  &__image {
    margin-right: auto;
    margin-left: min(8.28vw, 125px);
  }
}

@media screen and (max-width: 750px) {
  .specialties {
    &__item {
      flex-direction: column-reverse;
      align-items: center;
    }

    &__text {
      width: 100%;
      padding-bottom: 40px;
      padding-left: 0;
    }
  }
}

.swiper-pagination {
  box-sizing: border-box;
  padding-bottom: 30px;
}

.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 10px;
  background-color: #fff;
}
</style>
