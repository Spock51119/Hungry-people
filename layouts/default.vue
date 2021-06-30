<template>
  <div class="container">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue'
import AppFooter from '~/components/Footer.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
//
</style>
