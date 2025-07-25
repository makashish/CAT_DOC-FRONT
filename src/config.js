// src/config.js
export const getConfig = async () => {
  const response = await fetch('/config.json');
  const config = await response.json();
  return config;
};