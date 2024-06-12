<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {useFetchData} from "@/services/useFetchData";
import Loader from "@/components/Loader.vue";
import Card from "@/components/Card.vue";
import MainLayout from "@/layout/MainLayout.vue";

const {product, error, isLoading, getProduct, SearchProduct} = useFetchData();
const tempProduct = ref([]);
onBeforeMount(async () => {
  await getProduct();
});
const text = ref('');

function handleClick(e) {
  e.preventDefault()
  if (text.value != "") {
    SearchProduct(text.value);
  } else {
    console.log('todo bien')
    getProduct();
  }
}

if (error) {
  console.log(error);
}
console.log(tempProduct)
</script>

<template>
  <MainLayout>
    <div v-if="isLoading" class="d-flex justify-center align-center">
      <Loader></Loader>
    </div>
    <v-row v-else class="pa-4">
      <v-toolbar color="transparent" class="mt-4 px-4">
        <v-row>
          <v-col>
            <v-toolbar-title>Products List</v-toolbar-title>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-toolbar-items class="w-100">
              <v-text-field variant="solo" label="search product" append-inner-icon="mdi-magnify" single-line
                            hide-details flat v-model="text"></v-text-field>
              <v-btn @click="handleClick" density="compact" class="ml-2">Search Product</v-btn>
            </v-toolbar-items>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-col v-for="item in product.products" cols="12" md="4" lg="3" class="">
        <Card :item="item"></Card>
      </v-col>
    </v-row>
  </MainLayout>
</template>
<style scoped></style>
