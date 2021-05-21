import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:4500/api",
  baseURL: "https://chinalab.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});
