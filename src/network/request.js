import axios from "axios";

const instance = axios.create({
  baseURL: "http://152.136.185.210:7878/api/hy66/",
  timeout: 5000,
});
instance.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (error) => error
);

export default instance;
