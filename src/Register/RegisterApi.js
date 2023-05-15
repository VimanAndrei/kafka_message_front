import axios from "axios";
import { API_ADDRESS } from "../Login/LoginApi";

const API_PERSON_URL = API_ADDRESS + "/register";

export const addPerson = async (personData) => {
    try{
        return await axios.post(API_PERSON_URL, personData)
        
    } catch(error) {
        console.log("Error insert person: ", error.message)
    }
}