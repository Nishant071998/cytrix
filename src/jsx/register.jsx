import React, {useState} from "react"

export const Register =(props) => {

    const [userEmail,setEmail]=useState('');
    const [userPassword,setPass]=useState('');
    const [userName,setName]=useState('');  
    const handleSubmit =(e)=>{
      e.preventDefault();
      const user={userName,userEmail,userPassword}
      console.log(user);
      fetch("http://localhost:8080/user/addUser",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)

      } ).then(()=>{
        props.onFromSwitch('login')
      })
     }
    
     
   return (
    <div className="auth-form-container">
    <form className="register-form">
      <label htmlFor="name">name</label>
       <input value={userName} onChange={(e)=>setName(e.target.value)} type="name"  id="userName" name="userName" placeholder="enter your name"></input>     
      <label htmlFor="email" >email</label>
      <input value={userEmail} onChange={(e)=>setEmail(e.target.value)} type="email" id="userEmail" name="userEmail" placeholder="abc@abc.com" ></input>
      <label htmlFor="pass" >Password</label>
      <input value={userPassword} onChange={(e)=>setPass(e.target.value)} type="password" id="userPassword" name="userPassword" placeholder="*******"  ></input>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    <button className="link-btn" onClick={()=>props.onFromSwitch('login')} >Already have a account ? Login here</button>
    </div>
   )
   
}


