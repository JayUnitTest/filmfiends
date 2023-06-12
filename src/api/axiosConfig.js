import axios from "axios";

export default axios.create({
    baseURL: 'https://683b-81-101-79-4.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}, //client http request wont get blocked by CORS
});