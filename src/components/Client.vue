<script setup>
import {ref} from "vue";

const clients = ref([
  {
    img: "image/9.png",
    title: "Appel Mac Book Pro",
    price: "$ 93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  },
  {
    img: "image/10.png",
    title: "Appel Mac Book Pro",
    price: "$ 93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  },
  {
    img: "image/11.jpg",
    title: "Appel Mac Book Pro",
    price: "$ 93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  },
])
</script>

<template>
<v-row>
  <v-col cols="3" sm="3">
    <v-card class=""></v-card>
  </v-col>
</v-row>
</template>

<style scoped lang="sass">

</style>
