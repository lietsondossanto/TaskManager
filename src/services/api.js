import axios from "axios";

const api = axios.create({
  baseURL: "http://102.131.41.4/account?email=test&password=testa",
});

export default api;
