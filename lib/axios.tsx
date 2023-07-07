import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    // "Content-Type": "application/json",
    "X-Requested-with": "XMLHttpRequest",
  },
});

export default axios;
