import { useEffect, useState } from 'react'
import { getAllUsers } from './ChatApi';
import { Container } from '@mui/system';
import {List, ListItemText, ListItemAvatar, Avatar, ListItem, ListItemButton } from '@mui/material';
import NavBar from './NavBar';




function UserList(){
    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        getAllChatUsers();
    },[]);

    const getAllChatUsers = async () =>  {
        let username = window.sessionStorage.getItem("username");
        console.log(username);
        let response = await getAllUsers(username);
        console.log(response);
        setUsers(response.data)
    }

    function randomColor() {
        let hex = Math.floor(Math.random() * 0xFFFFFF);
        let color = "#" + hex.toString(16);
      
        return color;
      }


    return (
        <>
        <NavBar />
        <Container maxWidth="sm">
                <div>
                    <List dense sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                        {users.map((user, i) => {
                            const labelId = `checkbox-list-secondary-label-${i}`;
                            return (
                                <div>
                                    <ListItem key={user?.id} >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`${user?.name}`}
                                                    src={"dummy.js"}
                                                    sx={{ color: "black" }}
                                                    style={{
                                                        backgroundColor: randomColor()
                                                      }}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText id={labelId} primary={`${user?.name}`} />
                                        </ListItemButton>
                                    </ListItem>
                                </div>
                            );
                        })}
                    </List>
                </div>
        </Container>
        </>
    );
}

export default UserList;