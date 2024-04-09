<script setup>
const props = defineProps({item: Object})
</script>

<template>
  <v-card class="mx-auto my-12 pb-4" max-width="374">
    <v-img class="mx-4" height="280" :src="props.item.img"></v-img>
    <v-card-item>
      <v-card-title>{{ props.item.title }}</v-card-title>
    </v-card-item>
    <div class="text-center">
      <v-card-text>{{ props.item.bio }}</v-card-text>
      <v-row align="center" class="mx-0 mt-2">
        <v-rating :model-value="4.5" color="amber" density="compact" half-increments></v-rating>
        <v-spacer></v-spacer>
        <div class="text-gray ms-4">{{ props.item.price }}</div>
      </v-row>
    </div>
  </v-card>
</template>

<style scoped lang="sass">

</style>
