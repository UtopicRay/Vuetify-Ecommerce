<script setup>
import { useShopCartStore } from "@/store/ShopCartStore";
import ShopCartItem from "@/components/ShopCartItem";
const shopCart = useShopCartStore();
</script>

<template>
    <div v-if="shopCart.products.item===null||shopCart.products.item===undefined">
        No Hay productos
    </div>
  <v-row v-else>
    <v-col class="mx-4" cols="8">
      <v-list class="px-2 my-2">
        <v-toolbar color="transparent" class="mx-4">Carrito</v-toolbar>
        <v-list-item v-for="(item, index) in shopCart.products" :key="index">
          <ShopCartItem :item="item" class="ml-4"></ShopCartItem>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col>
      <v-card class="mx-4 my-2" cols="auto">
        <v-card-title>Resumen del pedido</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="d-flex my-2">
            <h3>Total productos</h3>
            <v-spacer></v-spacer>
            <p>{{ shopCart.price }}</p>
          </div>
          <v-divider></v-divider>
          <div class="d-flex my-2">
            <h3>Total del Envio</h3>
            <v-spacer></v-spacer>
            <p>{{ shopCart.price }}</p>
          </div>
          <v-divider></v-divider>
          <div class="d-flex mt-3">
            <h2>Importe total</h2>
            <v-spacer></v-spacer>
            <p>{{ shopCart.price }}</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mx-auto">Ir al Proceso de Compra</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <Featured></Featured>
</template>

<style scoped lang="sass"></style>
