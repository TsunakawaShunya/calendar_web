import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_DOMAIN,
  }),
  options
);

export default client