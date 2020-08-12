import Vue from "vue";
import Router from "vue-router";

// Top-level Pages
const Home = () => import("./views/home.vue");
const Stuff = () => import("./views/stuff.vue");
const Contact = () => import("./views/contact.vue");
const NotFound = () => import("./views/not-found.vue");

// Stuff
const ArrowsTheorem = () => import("./articles/arrows-theorem.vue");
// const CoronaClassical = () => import("./articles/corona-classical.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/stuff",
      name: "stuff",
      component: Stuff,
    },
    {
      path: "/stuff/there-is-no-perfect-voting-system-and-ill-prove-it-to-you",
      name: "there-is-no-perfect-voting-system-and-ill-prove-it-to-you",
      component: ArrowsTheorem,
    },
    // {
    //   path: "/blog/a-classical-coronavirus-model",
    //   name: "a-classical-coronavirus-model",
    //   component: CoronaClassical,
    // },
    {
      path: "*",
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
