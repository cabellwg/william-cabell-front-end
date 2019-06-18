import Vue from "vue";
import Router from "vue-router";
const Home = () => import("./views/home.vue");
const Projects = () => import("./views/projects.vue");
const Resume = () => import("./views/resume.vue");
const Contact = () => import("./views/contact.vue");
const NotFound = () => import("./views/not-found.vue");

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
    },
    {
      path: "*",
      component: NotFound
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
