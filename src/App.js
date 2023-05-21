import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import React, {useEffect, useState} from 'react'
import UserList from './Chat/UserList';
import AddGroup from './Chat/AddGroup';

function App() {
  const [showListOfUsers, setShowListOfUsersToggle] = useState(false);
  const handlesetShowListOfUsersToggle = () => setShowListOfUsersToggle(!showListOfUsers);

  useEffect(() => {
    if(window.sessionStorage.hasOwnProperty('username')){
      handlesetShowListOfUsersToggle()
    }
  },[])

  return (
    <div className="App">
        <BrowserRouter>        
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route>
              {
                showListOfUsers && 
                <>
                  <Route path='/userslist' element={<UserList/>}/>
                  <Route path='/addGroup' element={<AddGroup/>}/>
                </>
              }
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
