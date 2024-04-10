<script setup>
const props=defineProps({color:String,img:String})
</script>

<template>
  <v-col cols="3" sm="4">
    <v-card class="mx-auto my-12 pb-4" max-width="374" :color="props.color">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-item class="mt-10">
            <v-card-title class="text-center"
            >Smart watch</v-card-title
            >
          </v-card-item>

          <v-card-text>
            <div class="text-center">
              Small plates, salads & sandwiches
            </div>
            <div class="text-center mt-4">
              <v-btn color="black">Buy Now</v-btn>
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            height="250"
            class="mx-4"
            :src="props.img"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<style scoped lang="sass">

</style>
