<script setup>

import Carousel from "@/components/Carousel.vue";
import Promotion from "@/components/Promotion.vue";
import Popular from "@/components/Popular.vue";
import Featured from "@/components/Featured.vue";
import Client from "@/components/Client.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <Carousel/>
      </v-col>
      <v-col cols="12" sm="12">
        <Popular/>
      </v-col>
      <v-col cols="12" sm="12">
        <Featured/>
      </v-col>
      <v-col cols="12" sm="12">
        <Client/>
      </v-col>
      <v-col cols="12" sm="12">
        <v-row>
          <Promotion img="../../public/image/13.jpg"/>
          <Promotion color="red" img="../../public/image/14.jpg"/>
          <Promotion img="../../public/image/15.jpg"/>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

</style>
