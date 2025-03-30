import axios from "axios";

const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

axios.defaults.baseURL = API_URL;

export default axios;
