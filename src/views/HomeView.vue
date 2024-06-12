<script setup>
import Carousel from "@/components/Carousel.vue";
import Promotion from "@/components/Promotion.vue";
import Popular from "@/components/Popular.vue";
import Featured from "@/components/Featured.vue";
import Client from "@/components/Client.vue";
import MainLayout from "@/layout/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <Carousel />
        </v-col>
        <v-col cols="12" sm="12">
          <Popular />
        </v-col>
        <v-col cols="12" sm="12">
          <Featured />
        </v-col>
        <v-col cols="12" sm="12">
          <Client />
        </v-col>
        <v-col cols="12" sm="12">
          <v-row>
            <Promotion id="181"/>
            <Promotion color="red" id="180"  />
            <Promotion id="155" />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </MainLayout>
</template>

<style scoped lang="sass"></style>
