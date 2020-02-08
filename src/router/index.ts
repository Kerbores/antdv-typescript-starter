import Vue from "vue";
import Router, { Route } from "vue-router";
import UserLayout from "@/layout/UserLayout.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/user"
  },
  {
    path: "/user",
    component: UserLayout,
    redirect: "/user/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/user/Login.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new Router({
  routes
});

export default router;
