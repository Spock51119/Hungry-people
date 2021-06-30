<template>
  <section id="menu" class="menu">
    <div class="menu__wrapper wrapper">
      <h2 class="menu__title title-section">
        Delicious menu
      </h2>
      <p class="menu__description description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
      </p>
      <ul class="menu__category" @click="changeMenu">
        <li class="menu__category-item">
          soupe
        </li>
        <li class="menu__category-item">
          pizza
        </li>
        <li class="menu__category-item">
          pasta
        </li>
        <li class="menu__category-item">
          desert
        </li>
        <li class="menu__category-item">
          wine
        </li>
        <li class="menu__category-item">
          beer
        </li>
        <li class="menu__category-item">
          drinks
        </li>
      </ul>
      <div class="menu__items">
        <div
          v-for="id in showCount"
          :key="id"
          class="menu__item"
        >
          <h3 class="menu__item-name">
            <span class="menu__item-name-text">{{ menu[id].name }}</span>
          </h3>
          <p class="menu__item-description">
            {{ menu[id].description }}
          </p>
          <span class="menu__item-cost">{{ menu[id].cost }}</span>
        </div>
      </div>
      <button class="menu__btn-more" @click="openMenu = !openMenu">
        {{ btnContent }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      mounted: true,
      openMenu: false,
      menu: Object.keys(this.$store.getters['menu/pizza']).length > 1
        ? this.$store.getters['menu/pizza']
        : {
            1: {
              name: 'empty',
              description: 'empty',
              cost: 0
            }
          }
    }
  },
  computed: {
    btnContent () {
      if (this.mounted) {
        return 'View all'
      } else if (!this.openMenu) {
        return 'View all'
      } else {
        return 'Close'
      }
    },
    showCount () {
      if (this.mounted) {
        return this.menuLength
      } else if (document.documentElement.clientWidth > 1110) {
        if (this.openMenu) {
          return this.menuLength
        } else {
          return this.menuLength >= 21 ? 21 : this.menuLength
        }
      } else if (document.documentElement.clientWidth > 670) {
        if (this.openMenu) {
          return this.menuLength
        } else {
          return this.menuLength >= 14 ? 14 : this.menuLength
        }
      } else if (document.documentElement.clientWidth < 670) {
        if (this.openMenu) {
          return this.menuLength
        } else {
          return this.menuLength >= 7 ? 7 : this.menuLength
        }
      }
      return 1
    },
    menuLength () {
      return Object.keys(this.menu).length
    }
  },
  mounted () {
    this.mounted = false
    this.menu = Object.keys(this.$store.getters['menu/pizza']).length > 1
      ? this.$store.getters['menu/pizza']
      : {
          1: {
            name: 'empty',
            description: 'empty',
            cost: 0
          }
        }
  },
  methods: {
    menuList (payload) {
      this.menu = this.$store.getters[`menu/${payload}`]
    },
    changeMenu (event) {
      if (event.target.tagName === 'LI') {
        const selected = event.target.innerHTML.replace(/\s+/g, '')
        this.menuList(selected)
      }
    }
  }
}
</script>

<style lang="scss">
.menu {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
  }

  &__title {
    margin-bottom: 30px;
  }

  &__description {
    max-width: 565px;
    margin-bottom: 45px;
  }

  &__category {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    max-width: 100%;
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
  }

  &__category-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #333;
    text-transform: uppercase;
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 6.25vw;
    row-gap: 28px;
    width: 100%;
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(2, auto);
    width: 100%;
    column-gap: 10px;
  }

  &__item-name {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: max-content;
    grid-area: 1/1/2/2;
    padding: 3px 0;
    margin: 0;
    font-family: "Banny", sans-serif;
    font-size: 18px;
    line-height: 18px;
    color: #333;
    overflow-x: hidden;
  }

  &__item-name-text {
    position: relative;
    display: inline-block;
    width: max-content;

    &::after {
      position: absolute;
      top: 0;
      left: calc(100% + 5px);
      content: '.......................................................................';
      display: block;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  &__item-description {
    box-sizing: border-box;
    grid-area: 2/1/3/2;
    display: block;
    margin: 0;
    font-size: 10px;
    line-height: 130%;
    color: #ccc;
  }

  &__item-cost {
    grid-area: 1/2/3/3;
    display: block;
    width: max-content;
    max-width: 100%;
    height: max-content;
    padding: 3px 0;
    margin: 0;
    font-family: "Banny", sans-serif;
    font-size: 18px;
    line-height: 18px;
    color: #333;

    &::after {
      content: " USD";
    }
  }

  &__btn-more {
    display: none;
  }
}

@media screen and (max-width: 1110px) {
  .menu {
    &__items {
      display: grid;
      grid-template-rows: repeat(7, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
      width: 100%;
      height: min-content;
      overflow: hidden;
    }

    &__btn-more {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 60px;
      margin-top: 25px;
      text-transform: uppercase;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      background-color: #e8c300;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 670px) {
  .menu {
    &__items {
      grid-template-columns: repeat(1, 1fr);
    }

    &__category-item {
      height: 36px;
      font-size: 10px;
    }
  }
}
</style>
