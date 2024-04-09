<script setup>

</script>

<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon/>
      <v-app-bar-title>VueCommerce</v-app-bar-title>
    </template>
    <v-spacer></v-spacer>
    <v-text-field density="compact" variant="solo" label="buscar producto" append-inner-icon="mdi-magnify" single-line
                  hide-details flat></v-text-field>
    <v-spacer></v-spacer>
    <v-btn prepend-icon="mdi mdi-download-circle-outline">
      <template v-slot:preprend>
        <v-icon color="success"></v-icon>
      </template>
      Download App
    </v-btn>
  </v-app-bar>

</template>

<style scoped lang="sass">

</style>
