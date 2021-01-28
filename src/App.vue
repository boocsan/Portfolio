<template>
  <div class="app" :class="page">
    <div class="app_menu app_menu-L">
      <div @click="NavClick('AboutMe')" class="app_menu_btn c1" :class="{ active: page == 'c1' }">
        <div class="app_menu_btn-text" data-text="About Me">&nbsp;</div>
      </div>
      <div class="app_menu_line"></div>
      <div @click="NavClick('Licenses')" class="app_menu_btn c2" :class="{ active: page == 'c2' }">
        <div class="app_menu_btn-text" data-text="Licenses">&nbsp;</div>
      </div>
      <div class="app_menu_line"></div>
      <div @click="NavClick('Skills')" class="app_menu_btn c3" :class="{ active: page == 'c3' }">
        <div class="app_menu_btn-text" data-text="Skills">&nbsp;</div>
      </div>
    </div>
    <div class="app_menu app_menu-R">
      <div @click="NavClick('Services')" class="app_menu_btn c4" :class="{ active: page == 'c4' }">
        <div class="app_menu_btn-text" data-text="Services">&nbsp;</div>
      </div>
      <div class="app_menu_line"></div>
      <div @click="NavClick('Links')" class="app_menu_btn c5" :class="{ active: page == 'c5' }">
        <div class="app_menu_btn-text" data-text="Links">&nbsp;</div>
      </div>
      <div class="app_menu_line"></div>
      <div @click="NavClick('ContactMe')" class="app_menu_btn c6" :class="{ active: page == 'c6' }">
        <div class="app_menu_btn-text" data-text="Contact Me">&nbsp;</div>
      </div>
    </div>
    <div class="app_content">
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "app",
  data: () => ({
    page: "c0"
  }),
  mounted() {
    const page = this.GetPageNo(this.$route.name ?? "".replace("/", ""))
    this.page = page ?? "c0"
  },
  methods: {
    NavClick(x: string) {
      const page = this.GetPageNo(x)
      if (this.page === page) this.page = "c0"
      else this.page = page
      this.$router.push({ name: x === this.$route.name ? "Home" : x })
    },
    GetPageNo(x: string) {
      switch (x) {
        case "AboutMe":
          return "c1"
        case "Licenses":
          return "c2"
        case "Skills":
          return "c3"
        case "Services":
          return "c4"
        case "Links":
          return "c5"
        case "ContactMe":
          return "c6"
        default:
          return "c0"
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin m {
  @media (max-width: 768px) {
    @content;
  }
}

$lineColor: #aaaaaa;

.app {
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.75s all;

  &_menu {
    position: absolute;
    width: 130px;
    height: 100vh;
    z-index: 999;

    @include m {
      width: 100vw;
      height: 80px;
    }

    &-L {
      top: 0;
      left: -130px;
      animation: ShowL 1s 2.5s ease normal forwards;
      opacity: 0;

      @include m {
        display: flex;
        top: -80px;
        left: 0;
        animation: ShowL_s 1s 2.5s ease normal forwards;
      }

      .app_menu_btn {
        border-right: 1px solid $lineColor;

        @include m {
          border-right: none;
          border-bottom: 1px solid $lineColor;
        }

        &-text {
          top: 100%;
          left: 0;
          transform: rotateZ(-90deg);
          transform-origin: top left;

          @include m {
            top: 0;
            transform: none;
          }
        }
      }

      .app_menu_btn-bar {
        top: 0;
        right: 0;
      }
    }

    &-R {
      top: 0;
      right: -130px;
      animation: ShowR 1s 2.5s ease normal forwards;
      opacity: 0;

      @include m {
        display: flex;
        top: inherit;
        bottom: -80px;
        right: 0;
        animation: ShowR_s 1s 2.5s ease normal forwards;
      }

      .app_menu_btn {
        border-left: 1px solid $lineColor;

        @include m {
          border-left: none;
          border-top: 1px solid $lineColor;
        }

        &-text {
          top: 0;
          left: 130px;
          transform: rotateZ(90deg);
          transform-origin: top left;

          @include m {
            left: 0;
            transform: none;
          }
        }
      }

      .app_menu_btn-bar {
        top: 0;
        left: 0;
      }
    }

    &_line {
      position: relative;
      border-bottom: 1px solid $lineColor;
      z-index: 999;

      @include m {
        border-bottom: none;
        border-left: 1px solid $lineColor;
      }
    }

    &_btn {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 33.33333333333vh;
      background-color: #ffffff;
      cursor: pointer;
      transition: 0.75s all;

      @include m {
        width: 33.33333333333vw;
        height: 100%;
      }

      &-text {
        position: absolute;
        margin-bottom: 30px;
        width: 33.33333333333vh;
        height: 100px;
        background-color: #ffffff;
        text-align: center;
        transition: 0.75s all;
        line-height: 100px;

        @include m {
          width: 33.33333333333vw;
          height: 79px;
          line-height: 79px;
        }

        &::after {
          content: attr(data-text);
          display: block;
          position: absolute;
          width: 33.33333333333vh;
          height: 100px;
          top: 0;
          left: 0;
          line-height: 100px;
          font-size: 3vh;
          letter-spacing: 0.4rem;
          text-indent: 0.4rem;
          white-space: nowrap;
          background-color: transparent;
          transition: 0.75s all;

          @include m {
            width: 33.33333333333vw;
            height: 79px;
            line-height: 80px;
            font-size: 1rem;
            letter-spacing: 0;
            text-indent: 0;
          }
        }
      }

      &.active {
        border-left-color: rgba($lineColor, 0);
        border-right-color: rgba($lineColor, 0);

        @include m {
          border-top-color: rgba($lineColor, 0);
          border-bottom-color: rgba($lineColor, 0);
        }

        .app_menu_btn-text {
          background-color: transparent;

          &::after {
            height: 130px;
            line-height: 130px;

            @include m {
              height: 80px;
              line-height: 80px;
            }
          }
        }
      }
    }
  }

  &_content {
    box-sizing: border-box;
    padding: 0 100px;
    width: calc(100% - 260px);
    height: 80vh;

    @include m {
      padding: 20px;
      width: calc(100% - 20px);
      height: calc(100% - 200px);
    }
  }
}

.c1 {
  background-color: #ffcdd2;
}

.c2 {
  background-color: #bbdefb;
}

.c3 {
  background-color: #c8e6c9;
}

.c4 {
  background-color: #ffecb3;
}

.c5 {
  background-color: #e1bee7;
}

.c6 {
  background-color: #d7ccc8;
}

@keyframes ShowL {
  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes ShowR {
  to {
    right: 0;
    opacity: 1;
  }
}

@keyframes ShowL_s {
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes ShowR_s {
  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>

<style lang="scss">
@import url(//fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap);

body {
  position: relative;
  font-family: "Noto Sans JP", sans-serif !important;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.app_content {
  overflow: hidden;

  & > div {
    overflow-x: auto;
    overflow-y: hidden;
  }
}

.v-enter {
  transform: translate(0, 100px);
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: all 1s 0s ease;
}

.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}

.v-leave-to {
  transform: translate(0, -100px);
  opacity: 0;
}

.v-leave-active {
  transition: all 0.75s 0s ease;
}

a {
  text-decoration: none !important;
  color: #2592ff !important;
  font-weight: bold;
}
</style>
