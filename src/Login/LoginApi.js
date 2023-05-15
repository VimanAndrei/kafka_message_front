import axios from "axios";

export const API_ADDRESS = "http://" + window.location.hostname + ":8080" 

export const loginPerson = async (data) => {
    try {
        return await axios.post(`${API_ADDRESS}/login`, data);
    } catch (error) {
        console.log("Error login the person:", error.message)
    }
}