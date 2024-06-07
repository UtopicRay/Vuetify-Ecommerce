<script setup>
import Loader from "@/components/Loader.vue";
import MainLayout from "@/layout/MainLayout.vue";
import {useFetchData} from "@/services/useFetchData";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

const {product, isLoading, error, getProductDetails} = useFetchData();
const route = useRoute();
const IndexImage = ref(0);

onBeforeMount(async () => {
    await getProductDetails(route.params.id);
  }
)

function handleIndexImage(x) {
  IndexImage.value = x;
}

if (error) {
  console.log(error);
}
</script>

<template>
  <MainLayout>
    <div v-if="isLoading">
      <Loader></Loader>
    </div>
    <v-container v-else class="d-flex justify-center align-center my-4 mx-auto">
      <v-card class="card">
        <v-toolbar color="transparent">
          <v-toolbar-title>
            <router-link :to="{name:'products'}">
              <v-btn icon="mdi mdi-chevron-left" class="bg-shades-white"/>
            </router-link>
             Go to Products List
          </v-toolbar-title>
        </v-toolbar>
        <v-row>
          <v-col>
            <div class="d-flex flex-column justify-center">
              <div class="overflow-hidden">
                <div class="img-showcase">
                  <img :src="product.images[IndexImage]" height="600"/>
                </div>
              </div>
              <v-row v-show="product.images[1]" class="mx-auto">
                <v-col cols="auto" v-for="(images, index) in product.images" :key="index">
                  <a href="#" data-id="1" @click="handleIndexImage(index)">
                    <img :src="images" :alt="product.title + ' images'" width="200" height="200"/>
                  </a>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <!-- card right -->

          <v-col>
            <div class="product-content">
              <h2 class="product-title">{{ product.title }}</h2>
              <div class="d-flex align-center">
                <v-rating
                  :model-value="product.rating"
                  color="amber"
                  density="compact"
                  half-increments
                ></v-rating>
                <div class="text-white">{{ product.rating }}</div>
              </div>

              <div class="product-price">
                <p class="last-price">Old Price: <span>$257.00</span></p>
                <p class="new-price">New Price: <span>$249.00 (5%)</span></p>
              </div>

              <div class="product-detail">
                <h2>about this item:</h2>
                <p>{{ product.description }}</p>
                <ul>
                  <li>Color: <span>Black</span></li>
                  <li>Available: <span>in stock</span></li>
                  <li>Category: <span>Shoes</span></li>
                  <li>Shipping Area: <span>All over the world</span></li>
                  <li>Shipping Fee: <span>Free</span></li>
                </ul>
              </div>

              <div class="purchase-info d-flex">
                <v-btn
                  color="primary"
                  class="rounded-xl px-5 mx-2"
                  prepend-icon="mdi mdi-cart-outline"
                >
                  Add to Cart
                </v-btn>
              </div>

              <div class="social-links">
                <p>Share At:</p>
                <a href="#">
                  <v-icon icon="mdi-facebook"></v-icon>
                </a>
                <a href="#">
                  <v-icon icon="mdi-twitter"></v-icon>
                </a>
                <a href="#">
                  <i class="mdi-pinterest"></i>
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </MainLayout>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

body {
  line-height: 1.5;
}


img {
  width: 100%;
  display: block;
}

.img-showcase {
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
}

.img-showcase img {
  min-width: 100%;
}

.product-content {
  padding: 2rem 1rem;
}

.product-title {
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: deepskyblue;
  margin: 1rem 0;
}

.product-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 80px;
  background: deepskyblue;
}

.product-price {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.product-price span {
  font-weight: 400;
}

.last-price span {
  color: #f64749;
  text-decoration: line-through;
}

.new-price span {
  color: #256eff;
}

.product-detail h2 {
  text-transform: capitalize;
  color: deepskyblue;
  padding-bottom: 0.6rem;
}

.product-detail p {
  font-size: 0.9rem;
  padding: 0.3rem;
  opacity: 0.8;
}

.product-detail ul {
  margin: 1rem 0;
  font-size: 0.9rem;
}

.product-detail ul li {
  list-style: none;
  background: url(https://fadzrinmadu.github.io/hosted-assets/productStore.product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png) left center no-repeat;
  background-size: 18px;
  padding-left: 1.7rem;
  margin: 0.4rem 0;
  font-weight: 600;
  opacity: 0.9;
}

.product-detail ul li span {
  font-weight: 400;
}

.purchase-info {
  margin: 1.5rem 0;
}

.purchase-info input,
.purchase-info .btn {
  border: 1.5px solid #ddd;
  border-radius: 25px;
  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.2rem;
  margin-bottom: 1rem;
}

.purchase-info input {
  width: 60px;
}

.purchase-info .btn {
  cursor: pointer;
  color: #fff;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000;
  border: 1px solid #000;
  margin: 0 0.2rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.5s ease;
}

.social-links a:hover {
  background: #000;
  border-color: transparent;
  color: #fff;
}

</style>
