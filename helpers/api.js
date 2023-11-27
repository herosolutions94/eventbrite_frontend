// api.js
import axios from "axios";

const createApiInstance = () => {
    return axios.create({
        baseURL: `${process.env.API_URL}/`,
        headers: {
            Authorization: `Bearer asdasdasd.asdasd`,
            accept: "application/json"
        },
        mode: 'cors'
    });
};

export default createApiInstance;
