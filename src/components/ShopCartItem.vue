<script setup>
import {useShopCartStore} from '@/store/ShopCartStore';
const shopCart = useShopCartStore();
const props = defineProps({ item: Array});
</script>
<template>
  <v-card width="600" class="bg-grey-darken-3 mx-2 my-2">
    <v-row>
      <v-col cols="auto">
        <v-img :src="props.item.item.images[0]" width="200" height="200"></v-img>
      </v-col>
      <v-col cols="6">
        <v-card-title>{{ props.item.item.title }}</v-card-title>
        <v-card-text>{{ props.item.item.description }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="flat">Comprar</v-btn>
          <v-btn color="red" variant="elevated" @click="shopCart.RemoveProduct(props.item.id)"> Eliminar</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
