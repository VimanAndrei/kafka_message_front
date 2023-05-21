import React, { useState } from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, NativeSelect, styled } from '@mui/material'
import { addPerson } from '../Register/RegisterApi';

const FormPerson = styled(FormGroup)`
width: 50%;
margin: 5% auto 0% auto;
& > div {
    margin-top: 2%
}
`
const personData = {
    name:"",
    password:""
}

function AddGroup() {
    const [user, setUser] = useState(personData);
    const onInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }
    
    const addPersonDetails = async () => {
        let response = await addPerson(user);
        console.log(response.message)
        window.location = '/userslist';

    }
    

  return (
    <FormPerson>
        <Typography variant='h3'>Add a Group</Typography>
        <FormControl>
            <InputLabel>Group Name</InputLabel>
            <Input onChange={(event)=>onInputChange(event)} name="name" type="text"/>
        </FormControl>

        <FormControl>
            <Button variant='contained' onClick={() => addPersonDetails()}>Add</Button>
            <Button variant='contained' style={{marginTop: 10}} onClick={() => {window.location = '/userslist'}}>Back</Button>
        </FormControl>
    </FormPerson>
  )
}

export default AddGroup