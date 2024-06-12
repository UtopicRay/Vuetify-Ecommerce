<script setup>
import { useShopCartStore } from '@/store/ShopCartStore';

const props = defineProps({ item: Object });
const shopCart=useShopCartStore();
</script>

<template>
  <v-card class="mx-auto my-5 pb-4" max-width="380">
    <v-img class="mx-4 mt-3" height="280" :src="props.item?.images[0]"></v-img>
    <v-card-item>
      <v-card-title>{{ props.item.title }}</v-card-title>
    </v-card-item>
    <div class="">
      <v-card-text size="small">{{ props.item.description }}</v-card-text>
      <v-row align="center" class="mx-0 mt-2 px-2">
        <v-col cols="auto">
          <div class="text-gray font-weight-bold text-h5">{{ props.item.price }}</div>
          <v-rating
            :model-value="props.item.rating"
            color="amber"
            density="compact"
            half-increments
          ></v-rating>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" class="mr-2" @click="shopCart.addProduct(props.item)">Add Cart </v-btn>
          <v-btn variant="tonal" :to="{name:'products-details',params:{id:props.item.id}}">Info</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<style scoped lang="sass"></style>
