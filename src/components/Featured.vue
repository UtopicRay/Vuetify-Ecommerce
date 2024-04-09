<script setup>
import {ref} from "vue";
import Card from "@/components/Card.vue";

const features = ref(
  [
    {
      img: "image/5.png",
      title: "Appel Mac Book Pro",
      price: "$ 93.358.01",
      bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },
    {
      img: "image/6.png",
      title: "Appel Mac Book Pro",
      price: "$ 93.358.01",
      bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },
    {
      img: "image/7.png",
      title: "Appel Mac Book Pro",
      price: "$ 93.358.01",
      bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },
    {
      img: "image/8.png",
      title: "Appel Mac Book Pro",
      price: "$ 93.358.01",
      bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },
  ])
</script>

<template>
  <v-row>
    <v-col cols="3" v-for="(feature,index) in features" :key="index">
      <Card :item="feature"></Card>
    </v-col>
  </v-row>
</template>

<style scoped lang="sass">

</style>
