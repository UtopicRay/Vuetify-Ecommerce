import axios from "axios";
import { ref } from "vue";

export function useFetchData() {
  const product = ref([]);
  const error = ref(null);
  const isLoading = ref(true);

  async function getProduct() {
    await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        product.value = response.data;
      })
      .catch((Error) => {
        error.value = Error.message;
        console.log(error);
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  async function getProductDetails(id) {
    await axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        product.value = response.data;
  
      })
      .catch((Error) => {
        error.value = Error.message;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }
  async function getCategory(category, limit) {
    await axios
      .get(
        `https://dummyjson.com/products/category/${
          category ? category : "smartphones"
        }?limit=${limit ? limit : 10}`
      )
      .then((response) => {
        product.value = response.data;
      })
      .catch((Error) => {
        error.value = Error.message;
      })
      .finally(() => (isLoading.value = false));
  }
  async function getShortedProduct(type,limit) {
    await axios
      .get(`https://dummyjson.com/products?sortBy=${type?type:'stock'}&order=desc&limit=${limit?limit:10}`)
      .then((response) => {
        product.value = response.data;
      })
      .catch((Error) => {
        error.value = Error.message;
      })
      .finally(() => (isLoading.value = false));
  }
  return {
    getProduct,
    product,
    getProductDetails,
    error,
    isLoading,
    getCategory,
    getShortedProduct
  };
}
