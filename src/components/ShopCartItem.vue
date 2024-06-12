<script setup>
import {useShopCartStore} from '@/store/ShopCartStore';
const shopCart = useShopCartStore();
const props = defineProps({ item: Array});
</script>
<template>
  <v-card class="bg-grey-darken-3 mx-2 my-2">
    <v-row>
      <v-col cols="auto">
        <v-img :src="props.item.item.images[0]" width="200" height="200"></v-img>
      </v-col>
      <v-col cols="auto" md="6">
        <v-card-title>{{ props.item.item.title }}</v-card-title>
        <v-card-text>
          <p>{{ props.item.item.description }}</p>
        <p class="mt-4 text-h4 font-weight-bold">{{ props.item.item.price*props.item.cantidad }}</p>
        </v-card-text>
        <v-card-actions>
          <div class="d-flex justify-center align-center mx-2 ga-1">
            <v-btn density="compact" icon="mdi-less" @click="shopCart.updateCantidadProduct(props.item,'less')" variant="elevated">-</v-btn>
            <p>Cant: {{ props.item.cantidad }}</p>
            <v-btn icon="mdi-plus" density="compact" @click="shopCart.updateCantidadProduct(props.item,'more')" variant="elevated"/>
          </div>
          <v-btn color="red" variant="elevated" @click="shopCart.RemoveProduct(props.item)"> Remove</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
