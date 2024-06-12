<script setup>
import { useShopCartStore } from "@/store/ShopCartStore";
import ShopCartItem from "@/components/ShopCartItem";
import MainLayout from "@/layout/MainLayout.vue";
import Popup from "@/components/Popup.vue";
const shopCart = useShopCartStore();
</script>

<template>
  <MainLayout>
    <div
      v-if="
        shopCart.products[0]?.item === null ||
        shopCart.products[0]?.item === undefined
      "
      class="d-flex justify-center align-center flex-column"
    >
      <div class="mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-off"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17a2 2 0 1 0 2 2" />
          <path d="M17 17h-11v-11" />
          <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
          <path d="M3 3l18 18" />
        </svg>
      </div>
      <p class="mt-2 text-h3">Where is no products in the cart</p>
    </div>
    <v-row v-else class="pa-4">
      <v-col class="" cols="12" md="8">
        <v-list class="my-2">
          <v-toolbar color="transparent" class="mx-4">Shop Cart</v-toolbar>
          <v-list-item v-for="(item, index) in shopCart.products" :key="index">
            <ShopCartItem :item="item" class="ml-4"></ShopCartItem>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        <v-card class=" my-2" cols="auto">
          <v-card-title>Order summary</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex my-2">
              <h3>Order amounts</h3>
              <v-spacer></v-spacer>
              <p>{{ shopCart.price }}</p>
            </div>
            <v-divider></v-divider>
            <div class="d-flex my-2">
              <h3>Shipping amount</h3>
              <v-spacer></v-spacer>
              <p>0</p>
            </div>
            <v-divider></v-divider>
            <div class="d-flex mt-3">
              <h2>Total amount</h2>
              <v-spacer></v-spacer>
              <p>{{ shopCart.price }}</p>
            </div>
          </v-card-text>
          <v-card-actions>
             <Popup></Popup>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <Featured/>
  </MainLayout>
</template>

<style scoped lang="sass"></style>
