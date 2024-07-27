import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b5a662795b984284a3161e0800dd7b36",
  },
});
