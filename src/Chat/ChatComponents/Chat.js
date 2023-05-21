import React, { useState, useEffect } from 'react';
import {AppBar, Typography, styled, Toolbar} from '@mui/material'
import { NavLink } from 'react-router-dom'
import Input from './Input';
import { sendMessageToBack, getAllMessages } from '../ChatApi';
import SockJsClient from 'react-stomp';
import Messages from './Messages';
import './Chat.css'

const SOCKET_URL = "http://localhost:8080/ws-chat";


const Heder = styled(AppBar)`
background-color: black;
`
const HederTabs = styled(Typography)`
font-size: 18px;
margin: 10px;
`
const HederLinks = styled(NavLink)`
color: white;
textDecoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
}
`

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [show, setShow] = useState(false);



    let onMessageReceived = (msg) => {
        console.log('New Message Received!!', msg);
        setMessages(messages.concat(msg));

        // const userName = window.sessionStorage.getItem("username");
        // const messageto = window.sessionStorage.getItem("to"); 

        // if (msg.messageFrom === userName  msg.messageTo=== userName){
        //     setMessages(messages.concat(msg));
        // }else{
        //     if(msg.messageTo === messageto && msg.messageFrom === userName){
        //         setMessages(messages.concat(msg));
        //     }

        // }
        
        
    }

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onSendMessage = async (msgText) => {
        let username = window.sessionStorage.getItem("username");
        let to = window.sessionStorage.getItem("to");        
        let response = await sendMessageToBack(username, msgText, to);
        console.log(response);
    }

    const getAllMessagesF = async () =>  {
        let from = window.sessionStorage.getItem("username");
        let to = window.sessionStorage.getItem("to");  
        let response = await getAllMessages(from, to);
        console.log(response);
        setMessages(response.data);
        setShow(true);
    }

    useEffect(() => {  
        getAllMessagesF();      
    },[]);


    return (
        <div className="ChatToal">
            <Heder position='static'>
                <HederTabs>Hello,{" " + window.sessionStorage.getItem("username") + " "}!</HederTabs>
                <HederTabs>You are chatting with{" " + window.sessionStorage.getItem("to") + " "}!</HederTabs>
                <Toolbar>
                    <HederTabs><HederLinks to='/userslist'>Back</HederLinks></HederTabs>
                </Toolbar> 
            </Heder>

            <>
                <SockJsClient
                    url={SOCKET_URL}
                    topics={['/topic/group']}
                    onConnect={onConnected}
                    onDisconnect={console.log("Disconnected!")}
                    onMessage={(msg) => {onMessageReceived(msg)}}
                    debug={false}/>
                {show && <Messages
                    messages={messages}
                    currentUser={window.sessionStorage.getItem("username")}
                />}
                <Input onSendMessage = {onSendMessage}/>
            </>
        </div>        
    );
}
export default Chat;