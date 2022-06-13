import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Login",
    component: import('../views/Login.vue'),
  },
  {
    path: "/registration",
    name: "Registration",
    component: import('../views/Registration.vue'),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: import('../views/Dashboard.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;