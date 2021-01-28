<template>
  <div class="licenses">
    <div class="licenses_list">
      <div v-for="(v, k) in licenses" :key="k" class="licenses_box">
        <div class="card licenses_card">
          <div class="card-header licenses_c_h">{{ v.author }}</div>
          <div class="card-body">
            <h4 class="card-title">{{ v.name }}</h4>
            <h6 class="card-subtitle mb-2 text-muted licenses_c_s">{{ v.nameEn }}</h6>
            <p class="card-text">{{ v.date }}</p>
            <a :href="v.link1Url" class="card-link">{{ v.link1Name }}</a>
            <a :href="v.link2Url" class="card-link">{{ v.link2Name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Licenses",
  data: () => ({
    licenses: [
      {
        author: "独立行政法人情報処理推進機構",
        name: "情報セキュリティマネジメント",
        nameEn: "Information Security Management Examination",
        date: "2019/10 取得",
        link1Name: "IPA",
        link1Url: "https://www.jitec.ipa.go.jp/",
        link2Name: "情報セキュリティマネジメント",
        link2Url: "https://www.jitec.ipa.go.jp/1_11seido/sg.html"
      },
      {
        author: "独立行政法人情報処理推進機構",
        name: "応用情報技術者",
        nameEn: "Applied Information Technology Engineer Examination",
        date: "2019/04 取得",
        link1Name: "IPA",
        link1Url: "https://www.jitec.ipa.go.jp/",
        link2Name: "応用情報技術者試験",
        link2Url: "https://www.jitec.ipa.go.jp/1_11seido/ap.html"
      },
      {
        author: "Oracle Certified.",
        name: "Java Programmer, Silver SE 8",
        nameEn: "",
        date: "2019/02 取得",
        link1Name: "ORACLE University",
        link1Url: "https://education.oracle.com/ja/oracle-certified-java-programmer-silver-se-8-oracle-certified-associate-java-se-8-programmer/trackp_363",
        link2Name: "",
        link2Url: ""
      },
      {
        author: "独立行政法人情報処理推進機構",
        name: "基本情報技術者",
        nameEn: "Fundamental Information Technology Engineer Examination",
        date: "2018/10 取得",
        link1Name: "IPA",
        link1Url: "https://www.jitec.ipa.go.jp/",
        link2Name: "基本情報技術者試験",
        link2Url: "https://www.jitec.ipa.go.jp/1_11seido/fe.html"
      },
      {
        author: "独立行政法人情報処理推進機構",
        name: "IT パスポート",
        nameEn: "Information Technology Passport Examination",
        date: "2017/10 取得",
        link1Name: "IPA",
        link1Url: "https://www.jitec.ipa.go.jp/",
        link2Name: "IT パスポート試験",
        link2Url: "https://www.jitec.ipa.go.jp/1_11seido/ip.html"
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.licenses {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1250px) {
    display: block;
    overflow: auto;
  }

  &_list {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-flow: wrap;
  }

  &_box {
    box-sizing: border-box;
    margin: 10px;
    width: calc(33.3333333333% - 20px);

    @media (max-width: 1250px) {
      width: calc(50% - 20px);
    }

    @media (max-width: 1000px) {
      width: calc(100% - 20px);

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &:last-child {
      .licenses_card {
        margin-bottom: 0 !important;
      }
    }
  }

  &_card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  &_c {
    &_h {
      font-size: 14px;
      justify-content: center;
      align-items: center;
    }

    &_s {
      font-size: 14px;
    }
  }
}
</style>
