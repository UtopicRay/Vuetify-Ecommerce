<script setup>
import { ref, watch } from 'vue'
import {useShopCartStore} from "@/store/ShopCartStore";


const drawer = ref(false)
const group = ref(null)
const shopCart=useShopCartStore();
watch(group, () => {
  drawer.value = false
})
</script>
<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
      <router-link class="text-white" :to="{name:'home'}">VueCommerce</router-link>
      </v-app-bar-title>
    </template>
    <v-spacer></v-spacer>
    <router-link class="text-white" :to="{name:'shopCart'}">
      <v-btn class="text-none" stacked>
      <v-badge color="error" :content="shopCart.count" v-show="shopCart.count!==0">
        <v-icon>mdi mdi-cart-outline</v-icon>
      </v-badge>
      <v-icon v-show="shopCart.count===0">mdi mdi-cart-outline</v-icon>
    </v-btn>
    </router-link>

  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
    <v-list>
      <v-list-item link :to="{name:'home'}" prepend-icon="mdi mdi-home" title="Home"/>
      <v-list-item link :to="{name:'products'}" prepend-icon="mdi mdi-store" title="List of Products"/>
      <v-list-item link :to="{name:'shopCart'}" prepend-icon="mdi mdi-cart-outline" title="ShopCar"/>
    </v-list>
  </v-navigation-drawer>
</template>
