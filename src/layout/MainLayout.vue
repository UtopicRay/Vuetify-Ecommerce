<script setup>
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
          <slot></slot>
        </v-main>
        <AppFooter></AppFooter>
    </v-app>
</template>