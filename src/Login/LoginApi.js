import axios from "axios";

export const API_ADDRESS = "http://" + window.location.hostname + ":8080" 

const API_LOGIN_URL = API_ADDRESS + "/login"

export const loginPerson = async (data) => {
    try {
        return await axios.post(API_LOGIN_URL, data);
    } catch (error) {
        console.log("Error login the person:", error.message)
    }
}