<script setup>
import Card from "@/components/Card.vue";
import Loader from '@/components/Loader.vue';
import { useFetchData } from "@/services/useFetchData";
import {onBeforeMount} from "vue";

const { product, error, isLoading, getShortedProduct } = useFetchData();
onBeforeMount(async () => {
  await getShortedProduct('discountPercentage',3);
});
if (error) {
  console.log(error);
}
</script>

<template>
  <div v-if="isLoading" class="d-flex justify-center align-center"><Loader></Loader></div>
  <v-row style="background-color: #080a28">
    <v-col cols="12" md="3">
      <v-toolbar  style="background-color: #080a28">
          <v-toolbar-title class="text-center">Deals of today</v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-col cols="12" md="3" v-for="(client, index) in product.products" :key="index">
      <Card :item="client"></Card>
    </v-col>
  </v-row>

</template>

<style scoped lang="sass"></style>
