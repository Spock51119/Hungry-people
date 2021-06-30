<template>
  <button
    :class="['burger', {'burger_open': openMenu}]"
    aria-label="Open navigation"
    @click="$emit('clickBurger')"
  >
    <span class="burger__top" />
    <span class="burger__middle" />
    <span class="burger__bottom" />
  </button>
</template>

<script>
export default {
  props: ['openMenu'],
  emits: ['clickBurger']
}
</script>

<style lang="scss">
$width: 26px;
$height: 26px;
$wrapCoeff: 1.5;
$solid: 2px;
$colorBG: transparent;
$colorSolid: #fff;
$borRad: 50%;
$anDuration: 0.3s;

.burger {
  box-sizing: border-box;
  position: relative;
  // top: 50px;
  // right: 3%;
  z-index: 20;
  display: none;
  align-items: center;
  justify-content: center;
  width: $width * $wrapCoeff;
  height: $height * $wrapCoeff;
  margin: 0;
  cursor: pointer;
  background-color: $colorBG;
  border: none;
  border-radius: $borRad;

  &__middle {
    position: absolute;
    top: $height / 4;
    left: $width / 4;
    z-index: 100;
    display: inline-block;
    width: $width;
    height: $solid;
    margin: ($height - $solid) / 2 0;
    background-color: $colorSolid;
    background-size: 20px 10px;
    transition: $anDuration;
  }

  &__top {
    position: absolute;
    top: $height / 2.5;
    left: $width / 4;
    z-index: 100;
    display: inline-block;
    width: $width;
    height: $solid;
    background-color: $colorSolid;
    transition: top $anDuration, transform $anDuration;
  }

  &__bottom {
    position: absolute;
    bottom: $height / 2.5;
    left: $width / 4;
    z-index: 100;
    display: inline-block;
    width: $width;
    height: $solid;
    background-color: $colorSolid;
    transition: top $anDuration, transform $anDuration;
  }
}

.burger_open > .burger__middle {
  background-color: transparent;
  transition: $anDuration;
}

.burger_open > .burger__top {
  top: $height / $wrapCoeff;
  transition: top $anDuration, transform $anDuration;
  transform: rotate(45deg);
}

.burger_open > .burger__bottom {
  top: $height / $wrapCoeff;
  transition: top $anDuration, transform $anDuration;
  transform: rotate(-45deg);
}

@media screen and (max-width: 750px) {
  .burger {
    display: flex;
  }
}

</style>
