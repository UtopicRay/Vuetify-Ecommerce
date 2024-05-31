<script setup>
import Card from "@/components/Card.vue";
import { useFetchData } from "@/services/useFetchData";
import { onMounted } from "vue";

const { product, error, isLoading, getShortedProduct } = useFetchData();
onMounted(async () => {
  await getShortedProduct('discountPercentage',3);
});
if (error) {
  console.log(error);
}
</script>

<template>
  <div v-if="isLoading">...Loading</div>
  <v-row style="background-color: #080a28">
    <v-col cols="3" sm="3">
      <v-card class="" style="background-color: #080a28">
        <v-card-item>
          <v-card-title class="text-center">Deals of today</v-card-title>
        </v-card-item>
        <v-card-text>
          <div class="text-center">
            <h1>08:32:39</h1>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" sm="3" v-for="(client, index) in product.products" :key="index">
      <Card :item="client"></Card>
    </v-col>
  </v-row>

</template>

<style scoped lang="sass"></style>
