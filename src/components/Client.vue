<script setup>
import {ref} from "vue";
import Card from "@/components/Card.vue";

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
<v-row style="background-color: #080A28">
  <v-col cols="3" sm="3">
    <v-card class="" style="background-color: #080A28">
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
  <v-col cols="3" sm="3" v-for="(client,index) in clients" :key="index">
    <Card :item="client"></Card>
  </v-col>
</v-row>
</template>

<style scoped lang="sass">
</style>
