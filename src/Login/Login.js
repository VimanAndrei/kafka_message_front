import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import { loginPerson } from './LoginApi';
import jwt_decode from "jwt-decode";

class Login extends Component {
    constructor(props) {
      super(props)

    
      this.state = {
         name:"",
         password:""
      }
    }

    onChangeUsername= (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    hanlerSubmit = async (event) => {
        let response = await loginPerson(this.state);
        const decoded = jwt_decode(response.data);
    
        if (decoded.sub === "NOTFOUND") {
            alert("Username or password is wrong!")
            this.clikEvent()
        }else{
            let string = decoded.sub
            const words = string.split(';');

            window.sessionStorage.setItem("id",words[1])
            window.sessionStorage.setItem("username",words[0])
            // window.location=`/all`       
        }
        
    }

    clikEvent = event => {
        this.setState({
            name: "",
            password: ""
        })
    }

    registerEvent = event => {
        window.location=`/register`
    }
  render() {
    return (
      <div>
        <form>
            <Box 
            display="flex"
            flexDirection={"column"}
            maxWidth={500}
            justifyContent="center"
            alignItems="center"
            marginTop={10}
            padding={5}
            borderRadius={3}
            margin="auto"
            boxShadow={"5px 5px 8px #ccc"}>
                
                <Typography 
                variant='h3'
                padding={2}
                textAlign="center">
                    Login
                </Typography>
                <TextField margin='normal' type={'text'} variant='outlined' padding={2} placeholder="USERNAME" value={this.state.name}
                onChange={this.onChangeUsername}/>
                <TextField margin='normal' type={'password'} variant='outlined' padding={2} placeholder="PASSWORD" value={this.state.password}
                onChange={this.onChangePassword}/>
                <Button sx={{marginTop: 2, borderRadius: 3}} margin='normal' variant='contained' color='success' 
                onClick={this.hanlerSubmit}>LOGIN</Button>
                <Button sx={{marginTop: 2, borderRadius: 3}}
                onClick={this.clikEvent}>Clear</Button>

                <Button sx={{marginTop: 2, borderRadius: 3}} margin='normal' variant='contained'  
                onClick={this.registerEvent}>Reister</Button>

            </Box>
        </form>
      </div>

    )
  }
}

export default Login