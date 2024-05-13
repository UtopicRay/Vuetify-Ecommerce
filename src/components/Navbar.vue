<script setup>
import { ref, watch } from 'vue'


const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>

<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>VueCommerce</v-app-bar-title>
    </template>
    <v-spacer></v-spacer>
    <v-text-field density="compact" variant="solo" label="buscar producto" append-inner-icon="mdi-magnify" single-line
                  hide-details flat></v-text-field>
    <v-spacer></v-spacer>
    <v-btn class="text-none" stacked>
      <v-badge color="error" content="2">
        <v-icon>mdi mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
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
