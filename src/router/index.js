import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue")
  },
  {
    path: "/user/:id",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue")
  },
  {
    path: "/post/:id",
    component: () => import(/* webpackChunkName: "post" */ "../views/Post.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
