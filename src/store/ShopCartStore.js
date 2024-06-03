import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useShopCartStore = defineStore("shopCartStore", () => {
  const count = ref(0);
  const price = ref(0);
  const products = ref([]);
  function addProduct(product) {
    let aux = products.value.find(
      (product1) => product1.item.id === product.id
    );
    if (aux) {
      aux.cantidad = aux.cantidad + 1;
      aux.price=aux.price+product.price;
      count.value = count.value + 1;
      price.value=price.value+product.price;
      toast.success("Producto Añadido al Carrito");
    } else {
      products.value.push({
        item: { ...product },
        cantidad: 1,
        price: product.price,
      });
      toast.success("Producto Añadido al Carrito");
      count.value = count.value + 1;
      price.value = price.value + product.price;
    }
  }
  function updateCantidadProduct(product, order) {
    if (order === "less") {
      if (product.cantidad === 1) {
        return;
      }
      product.cantidad = product.cantidad - 1;
      price.value = price.value - product.price;
      count.value = count.value - 1;
    } else {
      product.cantidad = product.cantidad + 1;
      price.value = price.value + product.price;
      count.value = count.value + 1;
    }
  }
  function RemoveProduct(id) {
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
