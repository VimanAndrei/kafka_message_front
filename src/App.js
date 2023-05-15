import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
        <BrowserRouter>        
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
