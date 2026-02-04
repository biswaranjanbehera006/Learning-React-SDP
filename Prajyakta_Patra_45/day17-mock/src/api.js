import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getUsers = () => api.get("/users");
export const addUser = (user) => api.post("/users", user);
