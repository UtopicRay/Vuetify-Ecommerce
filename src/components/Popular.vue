<script setup>
import Card from "@/components/Card.vue";
import { useFetchData } from "@/services/useFetchData";
import { onMounted, ref } from "vue";
import Loader from "./Loader.vue";

const { product, error, isLoading, getCategory } = useFetchData();
const model = ref(null);
onMounted(async () => {
  await getCategory();
});
if (error) {
  console.log(error);
}
</script>
<template>
  <div v-if="isLoading" class="d-flex justify-center align-center">
  <Loader></Loader>
  </div>
  <v-row v-else>
    <v-toolbar color="transparent">
      <v-toolbar-title>Popular Products</v-toolbar-title>
    </v-toolbar>
      <v-slide-group v-model="model" show-arrows>
      <v-slide-group-item
        v-for="(popular, index) in product.products"
        :key="index"
      >
        <Card
          :item="popular"
          class="mr-4"
        ></Card>
      </v-slide-group-item>
    </v-slide-group>
  </v-row>    
</template>

<style scoped lang="sass"></style>
