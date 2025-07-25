// src/services/api.js
import axios from "axios";

export const uploadFile = async (file, lang, backendURL) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("lang", lang);

  const response = await axios.post(`${backendURL}/api/convert`, formData);
  return response.data;
};