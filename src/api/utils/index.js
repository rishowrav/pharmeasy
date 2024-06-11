import axios from "axios";

export const upload_image_url = async (formData) => {
  //1. upload image and get image url
  const { data: photoURL } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`,
    formData,
    {
      "content-type": "multipart/form-data",
    }
  );
  return photoURL.data.display_url;
};
