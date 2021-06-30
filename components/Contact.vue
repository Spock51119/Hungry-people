<template>
  <section id="contact" class="contact">
    <div class="contact__wrapper wrapper">
      <h2 class="contact__title title-section">
        contact
      </h2>
      <p class="contact__description description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
      </p>
      <form action="#" class="contact__form">
        <input type="text" class="contact__input input" placeholder="Name">
        <input type="text" class="contact__input input" placeholder="Email">
        <input type="text" class="contact__input input" placeholder="Phone">
        <textarea id="message" name="message" class="contact__message input" placeholder="Message" />
        <div class="contact__links">
          <a href="#" class="contact__link contact__link_address">5th London Boulevard, U.K.</a>
          <a href="#" class="contact__link contact__link_tel">+40 729 131 637/+40 726 458 782</a>
          <a href="#" class="contact__link contact__link_email">office@mindblister.com</a>
        </div>
        <button class="contact__submit-btn">
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.contact {
  &__wrapper {
    padding: 100px 0;
  }

  // &__title {
  // }

  &__description {
    max-width: 665px;
    margin: 20px auto;
    margin-bottom: 50px;
  }

  &__form {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    width: 100%;
  }

  &__input {
    &:nth-child(1) {
      grid-area: 1/1/2/3;
    }

    &:nth-child(2) {
      grid-area: 1/3/2/5;
    }

    &:nth-child(3) {
      grid-area: 1/5/2/7;
    }
  }

  &__message {
    box-sizing: border-box;
    grid-area: 2/1/3/7;
    display: block;
    width: 100%;
    height: 120px;
    padding: 20px;
    resize: none;
  }

  &__links {
    grid-area: 3/1/4/4;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
  }

  &__link {
    display: inline-block;
    width: max-content;
    flex-shrink: 0;
    padding-left: 25px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 180%;
    color: rgba(51, 51, 51, 0.5);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 14px 21px;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 15px;
    }

    &_address {
      background-image: url("/images/location.svg");
    }

    &_tel {
      background-image: url("/images/tel.svg");
    }

    &_email {
      background-image: url("/images/post.svg");
    }
  }

  &__submit-btn {
    grid-area: 3/4/4/7;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-transform: uppercase;
    background: #e8c300;
    border: none;
    border-radius: 5px;
  }
}

@media screen and (max-width: 1300px) {
  .contact {
    &__links {
      grid-area: 3/1/4/6;
    }

    &__submit-btn {
      grid-area: 3/6/4/7;
    }
  }
}

@media screen and (max-width: 850px) {
  .contact {
    &__form {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
