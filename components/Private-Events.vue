<template>
  <section id="events" class="events">
    <div class="events__wrapper wrapper">
      <h2 class="events__label label">
        Private events
      </h2>
      <div class="events__illustration events__illustration_first illustration">
        <img src="/images/eventsIll.jpg" alt="illustrations for events" class="events__image illustration__image">
      </div>
      <div class="events__illustration events__illustration_second illustration">
        <img src="/images/eventsIll2.jpg" alt="illustrations for events" class="events__image illustration__image">
      </div>
      <span class="events__contacts">
        For private events please call: <b>+40&nbsp;729&nbsp;131&nbsp;637 / +40&nbsp;726&nbsp;458&nbsp;782</b>&nbsp;or use the contact form.
      </span>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.events {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/eventsBG.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
  }

  &__label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    margin: 0;
    line-height: 100px;
    text-align: center;
    color: #fff;
  }

  &__illustration_first {
    &::before {
      left: 0;
      right: auto;
    }

    &::after {
      position: absolute;
      top: 0;
      right: min(2.77vw, 40px);
      display: block;
      width: 80px;
      height: 100%;
      content: "Weddings";
      background-color: #000;
      font-family: "Banny", sans-serif;
      font-size: 24px;
      line-height: 80px;
      text-indent: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
      writing-mode: vertical-lr;
      border-radius: 0 5px 5px 0;
    }
  }

  &__illustration_first &__image {
    margin-left: min(8.28vw, 125px);
    margin-right: auto;
  }

  &__illustration_second {
    &::before {
      left: auto;
      right: 0;
    }

    &::after {
      position: absolute;
      top: 0;
      right: auto;
      left: min(2.77vw, 40px);
      display: block;
      width: 80px;
      height: 100%;
      content: "corporate pzrties";
      background-color: #000;
      font-family: "Banny", sans-serif;
      font-size: 24px;
      line-height: 80px;
      text-indent: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
      writing-mode: vertical-lr;
      border-radius: 5px 0 0 5px;
      transform: rotate(-180deg);
    }
  }

  &__illustration_second &__image {
    margin-left: auto;
    margin-right: min(8.28vw, 125px);
  }

  &__contacts {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100px;
    padding-top: 38px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
}

@media screen and (max-width: 1100px) {
  .events {
    &__illustration_first {
      &::after {
        font-size: 14px;
      }
    }

    &__illustration_second {
      &::after {
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .events {
    &__wrapper {
      flex-direction: column;
    }

    &__illustration_first {
      margin-right: auto;
      margin-bottom: 40px;

      &::after {
        top: auto;
        bottom: -20px;
        right: auto;
        left: min(8.28vw, 125px);
        width: 32.98vw;
        max-width: 475px;
        height: 40px;
        font-size: 10px;
        line-height: 40px;
        text-indent: 5px;
        letter-spacing: initial;
        writing-mode: initial;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 5px 10px 2px rgba(206, 206, 206, 0.2);
      }
    }

    &__illustration_second {
      margin-left: auto;

      &::after {
        position: absolute;
        top: auto;
        bottom: -20px;
        left: auto;
        right: min(8.28vw, 125px);
        width: 32.98vw;
        max-width: 475px;
        height: 40px;
        content: "corporate";
        font-size: 10px;
        line-height: 40px;
        text-indent: 5px;
        letter-spacing: initial;
        writing-mode: initial;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 5px 10px 2px rgba(206, 206, 206, 0.2);
        transform: rotate(0);
      }
    }
  }
}
</style>
