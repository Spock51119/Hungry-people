<template>
  <div class="main-page">
    <AppFirstScreen />
    <AppAbout />
    <AppTeam />
    <AppBooking />
    <AppSpecialties />
    <AppMenu />
    <AppPrivateEvents />
    <AppGallery />
    <AppContact />
    <AppMap />
  </div>
</template>

<script>
import AppFirstScreen from '~/components/First-screen.vue'
import AppAbout from '~/components/About.vue'
import AppTeam from '~/components/Team.vue'
import AppBooking from '~/components/Booking.vue'
import AppSpecialties from '~/components/specialties.vue'
import AppMenu from '~/components/Menu.vue'
import AppPrivateEvents from '~/components/Private-Events.vue'
import AppGallery from '~/components/Gallery.vue'
import AppContact from '~/components/Contact.vue'
import AppMap from '~/components/map.vue'
export default {
  components: {
    AppFirstScreen,
    AppAbout,
    AppTeam,
    AppBooking,
    AppSpecialties,
    AppMenu,
    AppPrivateEvents,
    AppGallery,
    AppContact,
    AppMap
  }
}
</script>

<style lang="scss">
//
</style>
