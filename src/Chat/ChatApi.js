import { API_ADDRESS } from "../Login/LoginApi";
import axios from "axios";

const API_GetUsers_URL = API_ADDRESS + "/login/userslist"
const API_socket_URL = API_ADDRESS + '/api/send';
const API_GET_ALL_MSG_URL = API_ADDRESS + '/getmessagelist'


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

export const sendMessageToBack = async (username, text, to) => {
    const msg = {
        messageFrom: username,
        messageContent: text,
        messageTo: to
    }
    try {
        return await axios.post(API_socket_URL, msg);
    } catch (error) {
        console.log("Error on sending message:", error.message)
    }
}

export const getAllMessages = async (from, to) =>{
    const msg = {
        messageFrom: from,
        messageContent: "",
        messageTo: to
    }
    try {
        return await axios.post(API_GET_ALL_MSG_URL, msg);
    } catch (error) {
        console.log("Error on sending message:", error.message)
    }
}

