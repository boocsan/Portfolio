<template>
  <div class="links">
    <div class="links_box">
      <a v-for="(v, k) in links" :key="k" :href="v.url" class="links_btn">
        <div class="links_img">
          <img :src="v.icon" :alt="v.name">
        </div>
        <div class="links_text">{{ v.name }}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Links",
  data: () => ({
    links: [
      {
        url: "https://twitter.com/intent/user?user_id=769399284772896768",
        icon: "/assets/twitter.blue.svg",
        name: "Twitter"
      },
      {
        url: "https://github.com/iedred7584",
        icon: "/assets/github.png",
        name: "GitHub"
      },
      {
        url: "https://zenn.dev/iedred7584",
        icon: "/assets/zenn.png",
        name: "Zenn"
      },
      {
        url: "https://qiita.com/iedred7584",
        icon: "/assets/qiita.png",
        name: "Qiita"
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &_box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: wrap;

    @media (max-width: 500px) {
      // flex-flow: column;
    }
  }

  &_btn {
    margin: 0 20px;
    width: calc(20% - 20px);
    max-width: 400px;
    min-width: 150px;

    @media (max-width: 500px) {
      width: 30%;
      min-width: 0;
    }
  }

  &_img {
    position: relative;
    padding-top: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: contain;
    }
  }

  &_text {
    margin: 20px 0;
    text-align: center;
    font-size: 2rem;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
}
</style>
