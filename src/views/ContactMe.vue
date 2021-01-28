<template>
  <div class="contactme">
    <a class="contactme_btn contactme_mail" href="mailto:contact@iedred7584.com" target="_blank" rel="noopener noreferrer">
      Mail to contact@iedred7584.com
    </a>
    <div class="contactme_or">or</div>
    <a class="contactme_btn contactme_twitter" href="https://twitter.com/messages/compose?recipient_id=769399284772896768&ref_src=twsrc%5Etfw" target="_blank" rel="noopener noreferrer">
      <img class="contactme_twitter_logo" src="/assets/twitter.white.svg" alt="Twitter">
      Send Twitter Direct Message
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "ContactMe"
})
</script>

<style lang="scss" scoped>
.contactme {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  &_or {
    margin: 10px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 3px;
  }

  &_btn {
    display: flex;
    margin: 10px auto;
    width: 70%;
    height: 60px;
    border-radius: 4px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    letter-spacing: 1px;
    transition: all 0.15s;
    font-weight: normal !important;

    @media screen and (max-width: 768px) {
      width: 95%;
      letter-spacing: 0;
      font-size: 16px;
    }
  }

  &_mail {
    background-color: #ffffff;
    border: 2px solid rgba(202, 184, 184, 0.125);

    &:hover {
      background-color: #eeeeee;
      text-decoration: none;
    }
  }

  &_twitter {
    color: #ffffff !important;
    background-color: #1b95e0;

    &:hover {
      background-color: #0c7abf;
      text-decoration: none;
    }

    &_logo {
      display: inline-block;
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
