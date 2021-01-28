<template>
  <div class="home">
    <div class="home_inner">
      <div class="home_img">
        <img src="//avatars2.githubusercontent.com/u/32415097">
      </div>
      <h1 class="home_name">iedred7584</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Home"
})
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &_inner {
    display: flex;
    position: absolute;
    width: 100%;
    height: 480px;
    top: 50%;
    bottom: 50%;
    opacity: 0;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    transform: translateY(-30%);
    animation: View 1.5s 0s ease normal forwards;
  }

  &_img {
    display: block;
    position: relative;
    margin: 25px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 500px) {
      width: 70%;
      height: auto;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      right: 50%;
      bottom: 50%;
      border-top: 0 solid #f44336;
      border-right: 0 solid #2196f3;
      border-bottom: 0 solid #4caf50;
      border-left: 0 solid #ffc107;
      border-radius: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      animation: ShowCircle 0.5s 1.75s ease normal forwards;
    }
  }

  &_name {
    margin: 80px 0 0;
    height: 50px;
    font-size: 3vw;
    letter-spacing: 0.6rem;
    font-weight: 200;
    text-align: center;
    text-indent: 1rem;

    @media (max-width: 500px) {
      margin-top: 40px;
      font-size: 2rem;
    }
  }
}

@keyframes View {
  to {
    transform: translateY(-50%);
    opacity: 1;
  }
}

@keyframes ShowCircle {
  to {
    width: calc(100% + 50px);
    height: calc(100% + 50px);
    border-width: 5px;
    opacity: 1;
  }
}
</style>
