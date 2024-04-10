<template>
  <v-footer>
    <v-card flat tile class="text-white py-12 px-5" width="100%">
      <v-row>
        <v-col cols="12" sm="6" md="4" class="pa-16">
          <div class="text-center">
            <strong>VuetifyCommerce</strong>
          </div>
          <v-card-title class="mt-2">
            <div class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur explicabo
              fugit illum ipsum quia ratione reiciendis reprehenderit vel.
            </div>
          </v-card-title>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-card-text class="pt-0">
            <h3>About</h3>
          </v-card-text>
          <v-card-text class="text-gray">How it Work</v-card-text>
          <v-card-text class="text-gray">Our Programs</v-card-text>
          <v-card-text class="text-gray">Promotion</v-card-text>
          <v-card-text class="text-gray">Refer a Friend</v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-card-text class="pt-0">
            <h3>Dellvery</h3>
          </v-card-text>
          <v-card-text> Cost on Delevery</v-card-text>
          <v-card-text class="mt-n4"> Payment Method</v-card-text>
          <v-card-text class="mt-n4"> Delevery Astus</v-card-text>
          <v-card-text class="mt-n4"> Returns</v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card-text class="white--text pt-0">
            <h3>Contact</h3>
          </v-card-text>
          <v-card-text> AAE IdeaPro</v-card-text>
          <v-card-text class="mt-n4">
            216 / C EAST Road
          </v-card-text>
          <v-card-text class="mt-n4"> aae.idapro.com</v-card-text>
          <v-card-text class="mt-n4"> -B8254552214</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script setup>

</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
