<template>
  <footer class="footer">
    <small class="footer__right">
      © Copyright <b>Mindblister</b>  2019
    </small>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.9);

  &__right {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    line-height: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
