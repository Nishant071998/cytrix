import './App.css';
import React,{useState} from 'react';

import { Login } from './jsx/login'

import { Register } from './jsx/register'
import { Home } from './jsx/home'


function App() {  

    const [currentForm,setCurrentForm] = useState('login');
    const toggleForm =(formName) =>{
        setCurrentForm(formName);
    }
    const [user,setUser]=useState('');
    const userDetail =(userInfo)=>{
        setUser(userInfo);
    }
  
    return(
     <div className='App'>
        {   
            currentForm ==="login" ? <Login onFromSwitch={toggleForm} onSubmit ={userDetail} />:currentForm ==="register" ?<Register onFromSwitch={toggleForm}/>:<Home userInfo={user}/>
        }

     </div>
    ) 
}

export default App;
