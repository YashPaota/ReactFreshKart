import React, { useState } from 'react';
import loginStyles from  "../styles/login.module.css";
import { useRef  , useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from '../services/AuthProvider';


const Login = () => {
    const unameRef = useRef();
    const pwordRef = useRef();

    const navigate = useNavigate();

    const[isLoggedIn , setIsLoggedIn] = useContext(AuthContext);

    const[unameErr , setUnameErr] = useState("");
    const[pwordErr , setPwordErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isFormValid = validateForm();
        if(isFormValid)
        {
            login();
        }

    }

    const login= () => {
    
        const uname = unameRef.current.value;
        const pword = pwordRef.current.value;
        if (uname === "harry" && pword === "potter") {
            setIsLoggedIn(true);
            navigate("/home");
          } else {
            toast.error("Invalid Credentials", { theme: "colored", autoClose: 3000 });
          }
      

    }

    const validateForm = () => {
        const uname = unameRef.current.value;
        const pword = pwordRef.current.value;
        let isValid = false;
        if(uname.trim() === "")
        {
            setUnameErr("Username is required");
        }
        else if( pword.trim() === "")
        {
            setUnameErr("");
            setPwordErr("Password is required");
        }
        else
        {
            setUnameErr("");
            setPwordErr("");
            isValid = true;
        }
        return true;

    }
  return (
    <div className={loginStyles.loginContainer}>
    <ToastContainer />
        <div className={loginStyles.heading}>Login</div>
        <div className={loginStyles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={loginStyles.formGroup}>
                 <label for="uname">Username</label>
                 <input type="text" name="uname" ref={unameRef} />
                 {unameErr.length > 0 ? (
                    <span className={loginStyles.error}>{unameErr}</span>
                 ) : null}
                </div>
                <div className={loginStyles.formGroup}>
                 <label for="pword">Password</label>
                 <input type="password" name="pword" ref={pwordRef} />
                 {pwordErr.length > 0 ? (
                    <span className={loginStyles.error}>{pwordErr}</span>
                 ) : null}
                </div>
                <button type="submit" className={loginStyles.loginBtn}>Login</button>
                <div className={loginStyles.registerLink}>Register</div>
            </form>
        </div>
    </div>
  )
}

export default Login;