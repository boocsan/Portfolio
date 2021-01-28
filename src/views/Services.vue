<template>
  <div class="services">
    <div v-for="(v, k) in services" :key="k" class="services_box">
      <div class="services_title">
        <a :href="v.url" target="_blank" rel="noopener noreferrer">{{ v.name }}</a>
      </div>
      <p class="services_description" v-html="v.desc" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Services",
  data: () => ({
    services: [
      {
        name: "地震情報サイト - Yure.me",
        url: "https://yure.me/",
        desc: "地震情報を簡単に閲覧できる Web ページ。震度分布図や使用している API のご利用は別途お問い合わせください。"
      },
      {
        name: "気象庁防災情報XML Viewer",
        url: "https://vjmx.me/",
        desc: "気象庁から配信されている『気象庁防災情報XML』を一覧化して閲覧できるページです。<br />無料版を使用しているので実際に発表されてからこのページに反映されるまで2分ほど時間がかかります。"
      },
      {
        name: "緊急地震速報 JSON API",
        url: "https://api.iedred7584.com/eew/",
        desc: "気象庁から発表されている緊急地震速報を受信して、独自の JSON パーサでパースした結果を利用できます。<br />詳細は仕様ページをご確認ください。"
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.services {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  overflow: auto;

  &_box {
    display: flex;
    margin: 0 auto 30px;
    padding: 30px;
    width: calc(100% - 20px);
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }
  }

  &_title {
    display: block;
    margin-bottom: 20px;
    padding-bottom: 15px;
    width: 100%;
    font-size: 24px;
    border-bottom: 1px solid #cccccc;
  }

  &_description {
    margin: 0 auto;
    width: 100%;
    font-size: 18px;
    line-height: 1.7;
    text-align: center;
  }
}
</style>
