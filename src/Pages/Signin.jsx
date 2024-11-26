import React, { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

  const userName = useRef("");
  const userEmail = useRef("")
  const userPwd = useRef("")

  const namevalidation=()=>{
    if(userName.current.value.length<3){
      toast.error("Name must be at least 3 characters");
      return false;
    }else{
      return true;
    }
  }

  const userEmailvalidation=()=>{
    if(userEmail.current.value==0){
      toast.error("Enter email");
      return false;
    }else{
      const regx = /[a-zA-Z0-9]@+[a-zA-z].+/
      if(!userEmail.current.value.match(regx)){
        toast.error("invalid email")
        return false;
      }else{
        return true;
      }
    }
  }

  const passwordvalidation=()=>{
    if(userPwd.current.value.length==0){
      toast.error("Enter password");
      return false;
    }else{
      return true
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();





    
    if(namevalidation()){
      if(userEmailvalidation()){
        if(passwordvalidation()){
          axios.post('/api/user/signin',{
            userName: userName.current.value,
            userEmail: userEmail.current.value,
            userPwd: userPwd.current.value,
          })
          .then((response)=>{
            console.log(response.data);
          })
          .catch((error)=>{
            console.log(error);
          })
          userName.current.value=""
          userEmail.current.value=""
          userPwd.current.value=""
          toast.success("Account created succesfully.", {
            theme: "colored"
          })
        }
      }
    }
  };

  return (
    <div className="login-form-container">
      <div className="s-log-form">
        <div className="signin-title">
          <h2> Create a new account</h2> <br />
          <p>it's quick and easy</p>
        </div>
        <br />
        <br />
        <form action="" method="post" className="s-form" onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder="Full Name" ref={userName}/> <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Mobile number or email address"
          ref={userEmail}/> 
          <br />
          <input type="password" placeholder="New password" ref={userPwd}/> <br />
          <button type="submit">Sign Up</button>
        </form>
        <br />
        <p>
          People who use our service may have uploaded your contact information
          to Facebook. <span>Learn more.</span> 
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signin;
