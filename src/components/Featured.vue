<script setup>
import {onBeforeMount, ref} from "vue";
import Card from "@/components/Card.vue";
import { useFetchData } from "@/services/useFetchData";
import Loader from "./Loader.vue";

const { product, error, isLoading, getShortedProduct } = useFetchData();
const model =ref(null);
onBeforeMount(async () => {
  await getShortedProduct();
});
if (error) {
  console.log(error);
}
</script>

<template>
  <div v-if="isLoading">
    <Loader></Loader>
  </div>
  <div v-else>
    <v-toolbar color="transparent">
      <v-toolbar-title> Featured Products</v-toolbar-title>
    </v-toolbar>
    <v-slide-group v-model="model" show-arrows>
      <v-slide-group-item
        v-for="(feature, index) in product.products"
        :key="index"
      >
        <Card :item="feature" class="mr-4" :key="index"></Card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<style scoped lang="sass"></style>
