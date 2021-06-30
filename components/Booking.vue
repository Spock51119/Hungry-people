<template>
  <section id="booking" class="booking">
    <div class="booking__wrapper wrapper">
      <form action="#" class="booking__form">
        <h2 class="booking__title title-section">
          Book a table
        </h2>
        <input type="text" placeholder="Name" class="booking__input input">
        <input type="email" placeholder="Email" class="booking__input input">
        <input type="tel" placeholder="Phone" class="booking__input input">
        <select id="people" class="select" name="people">
          <option class="select__option" value="1">
            People
          </option>
          <option class="select__option" value="2">
            1
          </option>
          <option class="select__option" value="3">
            2
          </option>
          <option class="select__option" value="3">
            3
          </option>
        </select>
        <input type="date" class="booking__input input">
        <select id="time" class="select" name="people">
          <option class="select__option" value="3">
            Time
          </option>
          <option class="select__option" value="1">
            8-9
          </option>
          <option class="select__option" value="2">
            9-10
          </option>
          <option class="select__option" value="3">
            10-11
          </option>
          <option class="select__option" value="3">
            11-12
          </option>
          <option class="select__option" value="3">
            12-13
          </option>
          <option class="select__option" value="3">
            13-14
          </option>
          <option class="select__option" value="3">
            14-15
          </option>
        </select>
        <button class="booking__btn orange-btn">
          Book now
        </button>
      </form>
      <div class="booking__illustration illustration">
        <img src="/images/bookingIll.jpg" alt="illustrations for booking" class="booking__image illustration__image">
      </div>
      <span class="booking__schedule">
        Mon&nbsp;-&nbsp;Fri:&nbsp;<b>8PM&nbsp;-&nbsp;10PM</b>,&nbsp;Sat&nbsp;-&nbsp;Sun:&nbsp;<b>8PM&nbsp;-&nbsp;3AM</b>, Phone:&nbsp;<b>+40&nbsp;729&nbsp;131&nbsp;637/+40&nbsp;726&nbsp;458&nbsp;782</b>
      </span>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.booking {
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
  }

  &__form {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto repeat(4, 60px);
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 50%;
    height: max-content;
    padding-left: 55px;
    padding-right: 10px;
  }

  &__title {
    grid-area: 1/1/2/3;
    height: max-content;
  }

  // &__input {
  // }

  &__illustration {
    &::before {
      left: auto;
      right: 0;
    }
  }

  &__image {
    margin-left: auto;
    margin-right: min(8.28vw, 125px);
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/3;
    background: #e8c300;
    border: none;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    border-radius: 5px;
  }

  &__schedule {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    height: 100px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: rgba(51, 51, 51, 0.5);
  }
}

@media screen and (max-width: 950px) {
  .booking {
    &__wrapper {
      flex-direction: column-reverse;
    }

    &__form {
      padding: 0;
      margin-top: 40px;
      width: 100%;
    }
  }
}
</style>
