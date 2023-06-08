import './Loginpage.css';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Loginpage() {
    // localStorage.setItem("login", "DemiName")
    const navigate = useNavigate();
    const {register, handleSubmit}=useForm();

    let arrayofusers;
    if (localStorage.getItem("users")){
      arrayofusers = JSON.parse(localStorage.getItem("users"));
    }
    else{
      localStorage.setItem("users", JSON.stringify([]))
    }
    
    function checkUser(objofinput){
    let namesaved = null;
    let check;
    for (let i=0; i<arrayofusers.length;i++){
      console.log(arrayofusers[i]);
      console.log(objofinput);
       if (arrayofusers[i].userName==objofinput.username&&arrayofusers[i].password==objofinput.password){
        console.log(true);
        check=true;
        namesaved=arrayofusers[i].firstName;
       }
    }

    if (check==true){
      localStorage.setItem("login", namesaved)
      navigate('../');
    }
    else{
      alert("username / password is incorrect")
    }
  }

    return(
      <div id="login-container">
        <div id="login-inner">
          <h1 id='login-tittle'>Log in</h1>
          <form onSubmit={handleSubmit((data)=>{checkUser(data)})}>
          <div className='username-login-container'> 
            <div className="login-div">
              <span className="user">Username</span>
              <input className='login-input' type='text' {...register("username")}></input>
            </div>
          </div>
          <div className='username-login-container'>
            <div className="login-div">
              <span className="user">Password</span>
              <input className="login-input" type='password' {...register("password")}></input>
            </div>
          </div>
          <div id="divofsubmit-btn"><button id="login-btn" type="submit">Sign In</button></div>
          </form>
        </div>
    </div>
    )
  }
  
  export default Loginpage
