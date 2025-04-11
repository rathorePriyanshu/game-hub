import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "faf01037fd7547beab8560488db4db63",
  },
});
