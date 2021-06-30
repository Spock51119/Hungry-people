<template>
  <section id="aboutUs" class="about">
    <div class="about__wrapper wrapper">
      <div class="about__text text-block">
        <h2 class="about__title title-section">
          about us
        </h2>
        <p class="about__description description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
        </p>
        <p class="about__text-content text-content">
          Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
        </p>
      </div>
      <div class="about__illustration illustration">
        <img src="/images/about-img.jpg" alt="illustrations for about us" class="about__image illustration__image">
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.about {
  &__wrapper {
    display: flex;
    padding: 100px 0;
  }

  &__text {
    padding-right: 40px;
  }

  // &__title {
  // }

  // &__description {
  // }

  // &__text-content {
  // }

  &__illustration {
    &::before {
      left: auto;
      right: 0;
    }
  }

  &__image {
    margin-left: auto;
    margin-right: min(8.28vw, 125px);
  }
}

@media screen and (max-width: 750px) {
  .about {
    &__wrapper {
      flex-direction: column-reverse;
      align-items: center;
      padding-top: 50px;
    }

    &__text {
      width: 100%;
      padding-top: 40px;
      padding-right: 0;
    }
  }
}
</style>
