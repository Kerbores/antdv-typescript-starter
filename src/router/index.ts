import Vue from "vue";
import Router, { Route } from "vue-router";
import UserLayout from "@/layout/UserLayout.vue";
import "@/components/NProgress/nprogress.less"; // progress bar custom style
import NProgress from "nprogress";
import { Position, RawLocation } from "vue-router/types/router";
import * as types from "@/store/mutation-types";
import Utils from "@/utils/util";
import config from "@/core/config";

NProgress.configure({ showSpinner: false });

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
  scrollBehavior(to: Route, from: Route, savedPosition: void | Position) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        return { x: 0, y: from.meta.savedPosition };
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  },
  routes
});

router.beforeEach(
  (to: Route, from: Route, next: (to?: RawLocation | false | void) => void) => {
    if (to.path !== from.path) {
      NProgress.start();
      Utils.setDocumentTitle(config.title);
    }
    next();
  }
);

router.afterEach(() => {
  NProgress.done();
});

export default router;
