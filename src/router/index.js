import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ShopCartView from "@/views/ShopCartView.vue";
import PaymentView from "@/views/PaymentView.vue";
import {createRouter, createWebHistory} from "vue-router";
import ProductDetailView from "@/views/ProductDetailView.vue";

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
  }, {
    path: '/products/:id',
    name: "products-details",
    component: ProductDetailView
  },{
    path:'/payment',
    name:"payment",
    component:PaymentView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router;
