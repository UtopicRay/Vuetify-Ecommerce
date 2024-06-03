<script setup>
import {onMounted} from "vue";
import {useFetchData} from '@/services/useFetchData';
import Loader from '@/components/Loader.vue';
import Card from "@/components/Card.vue";

const {product,error,isLoading,getProduct} = useFetchData();
onMounted( async () => {
  await getProduct()
})
if (error){
  console.log(error)
}
</script>

<template>
  <div v-if="isLoading" class="d-flex justify-center align-center">
   <Loader></Loader>
  </div>
  <v-row v-else>
    <v-col  v-for="item in product.products" cols="3" class="">
      <Card :item="item" ></Card>
    </v-col>
  </v-row>

</template>
<style scoped>

</style>
