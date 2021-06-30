<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <a href="#" class="header__logo" />
      <nav
        :class="['navbar', {'navbar_open': openBurger}]"
        class="navbar"
      >
        <ul class="navbar__list">
          <li class="navbar__item">
            <a href="#" class="navbar__link">Home</a>
          </li>
          <li class="navbar__item">
            <a href="#aboutUs" class="navbar__link">About</a>
          </li>
          <li class="navbar__item">
            <a href="#team" class="navbar__link">Team</a>
          </li>
          <li class="navbar__item">
            <a href="#booking" class="navbar__link">Booking</a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link navbar__link_logo" />
          </li>
          <li class="navbar__item">
            <a href="#menu" class="navbar__link">Menu</a>
          </li>
          <li class="navbar__item">
            <a href="#gallery" class="navbar__link">Gallery</a>
          </li>
          <li class="navbar__item">
            <a href="#events" class="navbar__link">Events</a>
          </li>
          <li class="navbar__item">
            <a href="#contact" class="navbar__link">Contact</a>
          </li>
        </ul>
      </nav>
      <AppBurger
        :open-menu="openBurger"
        @clickBurger="toggleMenu"
      />
    </div>
  </header>
</template>

<script>
import AppBurger from '~/components/burger.vue'
export default {
  components: {
    AppBurger
  },
  data () {
    return {
      openBurger: false
    }
  },
  methods: {
    toggleMenu () {
      this.openBurger = !this.openBurger
      document.body.classList.toggle('stop-scroll')
    }
  }
}
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0;

  &__logo {
    display: none;
  }
}

.navbar {
  display: block;
  width: 100%;

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 15.277vw repeat(4, 1fr);
    list-style: none;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &:not(:nth-child(5)) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  &__link {
    display: block;
    width: max-content;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;

    &_logo {
      position: relative;
      top: 25px;
      left: 0;
      z-index: 10;
      display: block;
      width: 100%;
      height: 15.277vw;
      max-height: 150px;
      margin-bottom: -50px;
      background-image: url("/images/logo.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}

@media screen and (max-width: 750px) {
  .header {
    height: max-content;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }

    &__logo {
      display: block;
      width: 48px;
      height: 32px;
      background-image: url("/images/logo.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    max-height: 0;
    transition: max-height 0.4s;
    overflow: hidden;

    &_open {
      display: block;
      max-height: 100vh;
    }

    &__list {
      position: relative;
      z-index: 20;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background-color: #e8c100;
    }

    &__item {
      height: 32px;

      &:not(:nth-child(5)) {
        border-bottom: none;
      }

      &:nth-child(5) {
        display: none;
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    &__link {
      color: #000;

      &_logo {
        display: none;
      }
    }
  }
}
</style>
