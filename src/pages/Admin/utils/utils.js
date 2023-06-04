import axios from 'axios';


 export const uploadImagesApiRequest = async (images, productId) => {
  const formData = new FormData();
  Array.from(images).forEach((image) => {
    formData.append("images", image);
  });
 const {data} = await axios.post(
    "/api/products/admin/upload?productId=" + productId,
    formData
  );
  return data;
};
