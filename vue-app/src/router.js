import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Projects from "./views/projects.vue";
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
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
