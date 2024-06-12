<script setup>
import {ref} from "vue";
import {useShopCartStore} from "@/store/ShopCartStore";

const dialog=ref(false);
const dialog2=ref(false);
const store=useShopCartStore();
function handleDone(){
  store.ClearShopCart();
  dialog2.value=false;
}
</script>

<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    persistent
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" class="w-100 mb-2" color="#5865f2">
       Complete the Payment
      </v-btn>
    </template>

    <v-card
      text="once you accept, payment will be made and there will be no turning back."
      title="Are you sure you want to complete your purchase?"
    >
      <template v-slot:actions>
        <v-spacer></v-spacer>

        <v-btn @click="dialog = false">
          Disagree
        </v-btn>

        <v-btn @click="()=>{dialog = false; dialog2=true}">
          Confirm Order
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
  <v-dialog  v-model="dialog2" persistent>
    <v-sheet
      class="pa-4 text-center mx-auto"
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
    >
      <v-icon
        class="mb-5"
        color="success"
        icon="mdi-check-circle"
        size="112"
      ></v-icon>

      <h2 class="text-h5 mb-6">Thank you for your order!</h2>

      <p class="mb-4 text-medium-emphasis text-body-2">
        We have received your order and will send you a confirmation email shortly.
        In the meantime, you can continue shopping or return to the <router-link to="/">homepage</router-link>.
        <br>
        Otherwise, you're done!
      </p>

      <v-divider class="mb-4"></v-divider>

      <div class="text-end">
        <v-btn
          class="text-none"
          color="success"
          variant="flat"
          width="90"
          rounded
          @click="handleDone"
        >
          Done
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<style scoped lang="sass">

</style>
