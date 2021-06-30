<template>
  <div class="map">
    <yandex-map
      :coords="[51.507351, -0.127696]"
      zoom="15"
      :scroll-zoom="false"
    />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.map {
  display: block;
  width: 100%;
  height: 60vh;
}

.ymap-container {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
