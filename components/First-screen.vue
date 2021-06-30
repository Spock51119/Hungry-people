<template>
  <section class="first-screen">
    <div class="first-screen__wrapper wrapper">
      <span class="first-screen__schedule">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</span>
      <div class="first-screen__text">
        <h1 class="first-screen__title">
          Restaurant
          <span class="first-screen__name">hungry people</span>
        </h1>
        <div class="first-screen__buttons">
          <button class="first-screen__button">
            Book table
          </button>
          <button class="first-screen__button">
            Explore
          </button>
        </div>
        <button class="first-screen__btn-next" @click="nextSections" />
      </div>
      <ul class="first-screen__social-links">
        <li class="first-screen__item-social">
          <a href="#" class="first-screen__social-link first-screen__social-link_facebook" />
        </li>
        <li class="first-screen__item-social">
          <a href="#" class="first-screen__social-link first-screen__social-link_twitter" />
        </li>
        <li class="first-screen__item-social">
          <a href="#" class="first-screen__social-link first-screen__social-link_instagram" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    nextSections () {
      const toTop = document.documentElement.clientHeight
      const minHeight = 700
      if (toTop > minHeight) {
        window.scrollTo(0, toTop)
      } else {
        window.scrollTo(0, minHeight)
      }
    }
  }
}
</script>

<style lang="scss">
.first-screen {
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  padding-top: 100px;
  background-image: url("/images/mainBG.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  box-sizing: border-box;

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }

  &__schedule {
    display: block;
    height: 100%;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    writing-mode: sideways-lr;
  }

  &__text {
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0 35px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    transform: translateX(-50%);
    overflow: hidden;
  }

  &__title {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #fff;

    &::before {
      position: absolute;
      top: auto;
      bottom: -5px;
      left: calc(50% - 30px);
      width: 60px;
      height: 5px;
      content: "";
      background: #e8c300;
      border-radius: 50px;
    }
  }

  &__name {
    display: block;
    width: max-content;
    max-width: 100%;
    font-family: "Banny", sans-serif;
    font-size: 80px;
    line-height: 140px;
    text-transform: uppercase;
    color: #fff;
  }

  &__buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    padding-top: 35px;
    margin-bottom: 82px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: background-color 0.4s;

    &:hover {
      background-color: #e8c300;
      border: 1px solid #e8c300;
    }
  }

  &__btn-next {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin-bottom: 83px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    background-image: url("/images/btn-next.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    box-sizing: border-box;
    cursor: pointer;

    &::before {
      position: absolute;
      top: calc(15.277vw + 143px - 25px - 100vh);
      left: 50%;
      display: block;
      width: 1px;
      height: calc(100vh + 25px - 15.277vw - 143px);
      content: "";
      background-color: rgba(255, 255, 255, 0.2);
    }

    &::after {
      position: absolute;
      bottom: -83px;
      left: 50%;
      display: block;
      width: 1px;
      height: 83px;
      content: "";
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &__social-links {
    display: block;
    width: max-content;
    padding: 0;
    margin: 0;
  }

  &__item-social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100%;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__social-link {
    display: block;
    width: 48px;
    height: 48px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px;

    &_facebook {
      background-image: url("/images/svg/facebook.svg");
    }

    &_twitter {
      background-image: url("/images/svg/twitter.svg");
    }

    &_instagram {
      background-image: url("/images/svg/instagram.svg");
    }
  }
}

@media screen and (max-width: 1100px) {
  .first-screen {
    &__name {
      font-size: 42px;
      line-height: 250%;
    }

    &__item-social {
      width: 48px;
      height: 48px;
    }

    &__social-link {
      width: 32px;
      height: 32px;
      background-size: 25px;
    }

    &__button {
      width: 150px;
      height: 48px;
    }
  }
}

@media screen and (max-width: 750px) {
  .first-screen {
    min-height: 500px;

    &__wrapper {
      flex-direction: column;
    }

    &__social-links {
      display: flex;
      margin-bottom: 35px;
    }

    &__item-social {
      width: 48px;
      height: 48px;

      &:not(:last-child) {
        margin-bottom: 0;
        margin-right: 20px;
      }
    }

    &__btn-next {
      display: none;
    }

    &__text {
      position: relative;
      height: max-content;
      left: initial;
      padding: 0;
      transform: translateX(0);
      border: none;
    }

    &__schedule {
      display: inline-block;
      height: max-content;
      writing-mode: initial;
    }

    &__buttons {
      margin-bottom: 40px;
    }

    &__title {
      margin-bottom: 15px;
    }

    &__name {
      max-width: 100%;
      font-size: 30px;
    }
  }
}
</style>
