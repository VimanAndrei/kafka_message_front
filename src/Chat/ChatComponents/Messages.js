import { blue } from '@mui/material/colors';
import React from 'react'

const Messages = ({ messages, currentUser }) => {

    let renderMessage = (message) => {
        let isGroup = window.sessionStorage.getItem("isGroup");
        let messageFromMe = currentUser !== message.messageTo;
        if(isGroup === 'true'){
            messageFromMe = currentUser === message.messageFrom;
        }
        
        const className = messageFromMe ? "Messages-message currentUser" : "Messages-message";
        console.log(message);
        return (
            <li className={className}>
                <span
                    className="avatar"
                    style={{ backgroundColor: blue }}
                />
                <div className="Message-content">
                    <div className="username">
                        {message.messageFrom}
                    </div>
                    <div className="text">{message.messageContent}</div>
                </div>
            </li>
        );
    };

    return (
        <ul className="messages-list">
            {messages.map(msg => renderMessage(msg))}
        </ul>
    )
}


export default Messages