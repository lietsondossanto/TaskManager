import axios from "axios";

const api = axios.create({
  baseURL: "https://tlzora.deta.dev"
});

export default api;
