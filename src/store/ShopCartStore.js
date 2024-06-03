import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useShopCartStore = defineStore("shopCartStore", () => {
  const count = ref(0);
  const price = ref(0);
  const products = ref([]);
  function addProduct(product) {
    products.value.push({
      item: { ...product },
      cantidad: 1, // Asumiendo que la cantidad inicial es 1
    });
    toast.success("Producto Añadido al Carrito");
    count.value = count.value + 1;
  }
  function updateCantidadProduct(product, order) {
    if (order === "less") {
      if (product.cantidad === 1) {
        return;
      }
      product.cantidad = product.cantidad - 1;
    } else {
      product.cantidad = product.cantidad + 1;
    }
  }
  function RemoveProduct(id) {
    console.log(products);
    products.value = products.value.filter((product) => product.item.id != id);
    toast.error("Producto eliminado del Carrito");
    count.value = count.value - 1;
  }
  return {
    count,
    products,
    addProduct,
    RemoveProduct,
    price,
    updateCantidadProduct,
  };
});
