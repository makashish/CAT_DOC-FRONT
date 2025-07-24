import axios from "axios";

// ✅ Automatically uses environment variable, fallback to proxy path if not defined
const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

export const uploadFile = async (file, lang) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("lang", lang);

   const response = await axios.post("/api/convert", formData);
  return response.data;
};