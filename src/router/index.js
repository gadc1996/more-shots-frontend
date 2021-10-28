import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/dashboard' 
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "customers",
        component: () =>
          import(/* webpackChunkName: "customers" */ "../views/Customers.vue"),
      },
      {
        path: "events",
        component: () =>
          import(/* webpackChunkName: "events" */ "../views/Events.vue"),
      },
      {
        path: "event-types",
        component: () =>
          import(/* webpackChunkName: "event-types" */ "../views/EventTypes.vue"),
      },
      {
        path: "waiters",
        component: () =>
          import(/* webpackChunkName: "waiters" */ "../views/Waiters.vue"),
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
