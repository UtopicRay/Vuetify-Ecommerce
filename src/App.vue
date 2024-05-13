<script setup>
//
import AppFooter from "@/components/AppFooter.vue";
import Navbar from "@/components/Navbar.vue";
</script>
<template>
  <v-app>
    <Navbar/>
    <v-main>
      <RouterView></RouterView>
    </v-main>
    <AppFooter/>
  </v-app>
</template>


