import React, {useState} from "react";


export const Login = (props) => {
    const [userEmail,setEmail]= useState('');
    const [userPassword,setPass]= useState('');
    const [invalid,setInvalid]=useState(false);

    const handleSubmit =(e)=>{
    e.preventDefault();
    const user={userEmail,userPassword}
    console.log(user);
    fetch("http://localhost:8080/user/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)

      } )
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        if(responseData.response)
        {  
          props.onSubmit(responseData.user)
          props.onFromSwitch('home')
        }
        else{
            setInvalid(true);
        }
      })


    }
    const Creds = () => (
        <div>Invalid Credentials!</div>
      );
    
    
    return(
        <div className="auth-form-container">
        {invalid&&<Creds/>}
        <form className="login-form">
            <label htmlFor="email">email</label>
            <input value={userEmail} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="userEmail" name="email"></input>
            <label htmlFor="password">password</label>
            <input value={userPassword} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="userPassword" name="password"></input>
            <button type="submit" onClick={handleSubmit} >Login</button>
        </form> 
        <button  className="link-btn" type="submit"  onClick={()=>props.onFromSwitch('register')} >New Account? Register here</button>
        </div>
    )
}

//export default Login
