import axios from "axios";

export const listData = () => {
    return axios.get("http://localhost:8080/api/main_dish");
}