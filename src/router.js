import Vue from "vue";
import Router from "vue-router";

// Top-level Pages
const Home = () => import("./views/home.vue");
const About = () => import("./views/about.vue");
const Blog = () => import("./views/blog.vue");
const Contact = () => import("./views/contact.vue");
const NotFound = () => import("./views/not-found.vue");

// Blog articles
const ArrowsTheorem = () => import("./articles/arrows-theorem.vue");

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
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/blog/there-is-no-perfect-voting-system-and-ill-prove-it-to-you",
      name: "there-is-no-perfect-voting-system-and-ill-prove-it-to-you",
      component: ArrowsTheorem
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
