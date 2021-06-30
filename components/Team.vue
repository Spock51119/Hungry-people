<template>
  <section id="team" class="team">
    <div class="team__wrapper wrapper">
      <h2 class="team__label label">
        Our team
      </h2>
      <div class="team__illustration illustration">
        <img src="/images/teamIll.jpg" alt="illustrations for team us" class="team__image illustration__image">
      </div>
      <div class="team__text text-block">
        <h2 class="team__title title-section">
          Master chef
        </h2>
        <p class="team__description description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
        </p>
        <p class="team__text-content text-content">
          Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.team {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/teamBG.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__wrapper {
    position: relative;
    display: flex;
    padding: 100px 0;
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
  .team {
    &__wrapper {
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
</style>
