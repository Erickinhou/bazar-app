import axios from "axios";

export const api = axios.create({
  baseURL: "http://146.190.13.241:3333/",
});
