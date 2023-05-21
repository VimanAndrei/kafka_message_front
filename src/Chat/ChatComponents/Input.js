import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
const Input = ({ onSendMessage }) => {
    const [text, setText] = useState("")

    let onChange = (e) => {
        setText(e.target.value)
    }

    let onSubmit = () => {  
        setText("");      
        onSendMessage(text);
        
    }

    return (
        <div className="message-input">
            <div class="flex-container">
                <TextField
                    className="inputField"
                    label="Type your message here..."
                    placeholder="Enter your message and press ENTER"
                    onChange={e => onChange(e)}
                    margin="normal"
                    value={text}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            onSubmit(text);
                        }
                    }}
                    style={{ height: "30px", width: "80%" }}
                />
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Send
                </Button>
            </div>
        </div>
    );
}


export default Input