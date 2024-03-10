import React from "react"

export const Home =(props)=>{
    console.log(props.userInfo)
    return(
    <div>
       <label>WELCOME TO HOME  {props.userInfo.userName}</label> 
    </div>)
}
