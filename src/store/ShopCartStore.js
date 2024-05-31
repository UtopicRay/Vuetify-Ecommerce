import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useShopCartStore = defineStore("shopCartStore", () => {
  const count = ref(0);
  const price = ref(0);
  const products = ref([{ item: {} ,cantidad: 0 }]);
  function addProduct(product) {
    products.value.push({
      cantidad:0
    });
    console.log(products.value[0]);
    toast.success("Producto Añadido al Carrito");
    count.value = count.value + 1;
  }
  function RemoveProduct(id) {
    console.log(products);
    products.value = products.value.filter((product) => product.id != id);
    toast.error("Producto eliminado del Carrito");
    count.value = count.value - 1;
  }
  return { count, products, addProduct, RemoveProduct, price };
});
