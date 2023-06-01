import ProductPageComponent from "./components/ProductPageComponent.js";
import axios from 'axios'


const fetchProducts = async (abctrl) => {
  const {data} = await axios.get("/api/products/admin", {
    signal: abctrl.signal,
  })
  return data;
}

const deleteProduct = async (productId) => {
  const { data } = await axios.delete(`/api/products/admin/${productId}`);
  return data;
};

function AdminProductsPage() {
  return (
    <ProductPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct}  />
  );
}

export default AdminProductsPage;
