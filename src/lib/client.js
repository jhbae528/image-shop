import axios from "axios";

//axios.defaults.baseURL = "/api";

const client = axios.create({
    baseURL : "/api",
});

export default client;