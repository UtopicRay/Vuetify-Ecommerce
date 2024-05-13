import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ShopCartView from "@/views/ShopCartView.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView
  }, {
    path: "/shopCart",
    name: "shopCart",
    component: ShopCartView
  }
]
const router=createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})
export default router;
