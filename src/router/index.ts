import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"
import AboutMe from "../views/AboutMe.vue"
import Licenses from "../views/Licenses.vue"
import Skills from "../views/Skills.vue"
import Services from "../views/Services.vue"
import Links from "../views/Links.vue"
import ContactMe from "../views/ContactMe.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMe
  },
  {
    path: "/licenses",
    name: "Licenses",
    component: Licenses
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/links",
    name: "Links",
    component: Links
  },
  {
    path: "/contactme",
    name: "ContactMe",
    component: ContactMe
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
