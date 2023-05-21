import { API_ADDRESS } from "../Login/LoginApi";
import axios from "axios";

const API_GetUsers_URL = API_ADDRESS + "/login/userslist"


export const getAllUsers = async (username) => {
    const pDto = {
        "name": username,
        "password": ""
    }
    try {
        return await axios.post(API_GetUsers_URL, pDto);
    } catch (error) {
        console.log("Error get all users:", error.message)
    }
}