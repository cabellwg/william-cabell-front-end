import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Portfolio from "./views/portfolio.vue";
import Resume from "./views/resume.vue";
import Contact from "./views/contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/resume",
      name: "resumé",
      component: Resume
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
