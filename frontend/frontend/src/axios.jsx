import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4545/ecommerce",
});
delete API.defaults.headers.common["Authorization"];
export default API;