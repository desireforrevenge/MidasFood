import axios from "axios";

export const listData = () => {
    return axios.get("http://localhost:8080/api/second_main_dish");
}