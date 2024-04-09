<script setup>
import {ref} from "vue";

let items = ref(
  [
    {
      src: "7.jpg",
      title: "Surface Studio",
      text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
    },
    {
      src: "1.jpg",
      title: "Surface Studio",
      text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
    },
    {
      src: "2.jpg",
      title: "Surface Studio",
      text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
    },
    {
      src: "3.jpg",
      title: "Surface Studio",
      text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
    },
    {
      src: "4.jpg",
      title: "Surface Studio",
      text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
    },
    {
      src: "5.jpg",
      title: "Surface Studio",
      text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
    },
  ]
)
</script>

<template>
  <v-carousel>
    <v-carousel-item v-for="(item,index) in items" :key="index" :src="item.src" cover>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="d-flex fill-height justify-center align-center">
            <h2 class="text-white">{{ item.title }}</h2>
          </div>
          <div class="d-flex fill-height justify-center align-center">
            <h2 class="text-white">{{ item.text }}</h2>
          </div>
          <div class="d-flex fill-height justify-center align-center">
            <v-btn style="margin-top:-120px ">Buy Now</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>

</template>

<style scoped lang="sass">

</style>
