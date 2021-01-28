<template>
  <div class="skills">
    <div class="skills_sub">チュートリアルレベルから、それなりにできるものまで。</div>
    <div class="skills_box">
      <div v-for="(v, k) in skills" :key="k" class="skills_block">
        <ul class="list-group">
          <li class="list-group-item skills_type">{{ v.type }}</li>
          <li v-for="(vv, kk) in v.list" :key="kk" class="list-group-item">{{ vv }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Skills",
  data: () => ({
    skills: [
      {
        type: "Programming Languages",
        list: ["C#", "Java", "PHP", "TypeScript", "JavaScript", "HTML", "CSS"]
      },
      {
        type: "Container Technologies",
        list: ["Docker & Docker Swarm", "Kubernetes"]
      },
      {
        type: "Operating Systems",
        list: ["Windows", "Ubuntu Server", "macOS"]
      },
      {
        type: "Virtualization Technologies",
        list: ["Hyper-V", "VMware ESXi", "Proxmox"]
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  @media (max-width: 1500px) {
    display: block;
    overflow: auto;
  }

  &_sub {
    margin-bottom: 30px;
    text-align: center;
    font-size: 1.3em;

    br {
      display: none;

      @media (max-width: 450px) {
        display: block;
      }
    }
  }

  &_box {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    flex-flow: wrap;
  }

  &_block {
    margin: 0 10px 30px;
    width: calc(25% - 20px);
    min-width: calc(25% - 20px);
    max-width: calc(25% - 20px);

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 1500px) {
      width: calc(50% - 20px);
      min-width: calc(50% - 20px);
      max-width: calc(50% - 20px);
    }

    @media (max-width: 950px) {
      width: calc(100% - 20px);
      min-width: calc(100% - 20px);
      max-width: calc(100% - 20px);
    }
  }

  &_type {
    box-sizing: border-box;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
  }
}

.row {
  margin: 0 auto;
}
</style>
