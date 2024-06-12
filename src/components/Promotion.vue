<script setup>
import {useFetchData} from "@/services/useFetchData";
import {onBeforeMount} from "vue";
import Loader from "@/components/Loader.vue";
import {useShopCartStore} from "@/store/ShopCartStore";

const props=defineProps({color:String,id:Number})
const {product,error,isLoading,getProductDetails}=useFetchData();
const store=useShopCartStore();
onBeforeMount(async ()=>{
 await getProductDetails(props.id)
})
if (error){
  console.log(error);
}
</script>
<template>
<div v-if="isLoading">
  <Loader/>
</div>
  <v-col cols="3" sm="4" v-else>
    <v-card class="mx-auto my-12 pb-4" height="300" :color="props.color">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-item class="mt-10">
            <v-card-title class="text-center"
            >{{product.title}}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="text-center">
              {{product.description}}
            </div>
            <div class="text-center mt-4">
              <v-btn color="black" @click="store.addProduct(product)">Buy Now</v-btn>
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            height="250"
            class="mx-4"
            :src="product?.images[0]"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<style scoped lang="sass">

</style>
