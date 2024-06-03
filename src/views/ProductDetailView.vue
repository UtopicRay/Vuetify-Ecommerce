<script setup>
import { useFetchData } from "@/services/useFetchData";
import {onMounted} from "vue";


const {product, isLoading, error, getProductDetails} = useFetchData()

onMounted(async () => {
  await getProductDetails();
})
if (error) {
  console.log(error);
}
</script>

<template>
  <div v-if="isLoading">
    ...Loading
  </div>
  <v-card v-else class="card-wrapper d-flex justify-center align-center my-4">
    <div class="card">
      <div class="d-flex flex-column justify-center">
        <div class="overflow-hidden">
          <div class="img-showcase">
            <img
              :src="product.images[0]"
              alt="shoe image">
          </div>
        </div>
<div class="img-select">
          <div class="img-item">
            <a href="#" data-id="1">
              <img
                :src="product?.images[0]"
                alt="shoe image">
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="2">
              <img
                :src="product?.images[1]"
                alt="shoe image">
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="3">
              <img
                :src="product?.images[2]"
                alt="shoe image">
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="4">
              <img
                :src="product?.images[3]"
                alt="shoe image">
            </a>
          </div>
        </div>
      </div>
      <!-- card right -->
      <div class="product-content">
        <h2 class="product-title">{{ product.title }}</h2>
        <a href="#" class="product-link">visit nike store</a>
        <div class="d-flex align-center">
          <v-rating :model-value="product.rating" color="amber" density="compact"
                    half-increments></v-rating>
          <div class="text-white ">{{product.rating }}</div>
        </div>

        <div class="product-price">
          <p class="last-price">Old Price: <span>$257.00</span></p>
          <p class="new-price">New Price: <span>$249.00 (5%)</span></p>
        </div>

        <div class="product-detail">
          <h2>about this item: </h2>
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
          <input type="number" min="0" value="1">
          <v-btn color="primary" class="rounded-xl px-5 mx-2" prepend-icon="mdi mdi-cart-outline">
            Add to Cart
          </v-btn>
          <v-btn>Compare</v-btn>
        </div>

        <div class="social-links">
          <p>Share At: </p>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i class="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

body {
  line-height: 1.5;
}

.card-wrapper {
  max-width: 1100px;
  margin: 0 auto;
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

.img-select {
  display: flex;
}

.img-item {
  margin: 0.3rem;
}

.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3) {
  margin-right: 0;
}

.img-item:hover {
  opacity: 0.8;
}

.product-content {
  padding: 2rem 1rem;
}

.product-title {
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
}

.product-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 80px;
  background: #12263a;
}

.product-link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  background: #256eff;
  color: #fff;
  padding: 0 0.3rem;
  transition: all 0.5s ease;
}

.product-link:hover {
  opacity: 0.9;
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
  color: #12263a;
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

@media screen and (min-width: 992px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }


  .productStore.product-content {
    padding-top: 0;
  }
}
</style>