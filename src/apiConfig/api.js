import axios from "axios";
import URL from "../config";

console.log(URL);

let API = axios.create({
  baseURL: URL,
  headers: { "Content-Type": " application/json" }
});

export default API;
