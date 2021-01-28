<template>
  <div class="aboutme">
    <b-table class="aboutme_table" :items="profiles" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "AboutMe",
  data: () => ({
    profiles: [
      {
        key: "Name",
        value: "iedred7584"
      },
      {
        key: "Age",
        value: new Date().getFullYear() - 1999 - (new Date().getMonth() + 1 >= 9 && new Date().getDate() >= 3 ? 0 : 1)
      },
      {
        key: "Date of Birth",
        value: "1999-09-03"
      },
      {
        key: "Place",
        value: "Gunma, Japan"
      },
      {
        key: "Jobs",
        value: "CHUO Institute of Information and Design College Student, Web Engineer, Backend Engineer."
      }
    ]
  })
})
</script>

<style lang="scss">
.aboutme {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &_table {
    margin: 0 !important;
    width: 80%;
    max-width: 900px;

    th {
      border-top: none !important;

      &:nth-child(1) {
        min-width: 100px;
      }
    }

    th,
    td {
      border-color: #4a4a4a !important;
      vertical-align: inherit;

      &:first-of-type {
        border-right: 1px solid #4a4a4a;
        text-align: center;
      }
    }
  }
}
</style>
