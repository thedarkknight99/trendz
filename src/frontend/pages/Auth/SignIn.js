import React, { useContext, useState } from 'react';
import "./auth.css";
import axios from "axios"
// import { loginHandler } from '../../../backend/controllers/AuthController';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/auth/AuthContext';

export const SignIn = () => {
    const navigate = useNavigate();
    let location = useLocation();
    console.log(location)
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    // const signupHandler = async () => {
    //     try {
    //       const response = await axios.post(`/api/auth/signup`, {
    //         firstName: "Adarsh",
    //         lastName: "Balika",
    //         email: "adarshbalika@neog.camp",
    //         password: "adarshBalika",
    //       });
    //       // saving the encodedToken in the localStorage
    //       localStorage.setItem("token", response.data.encodedToken);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    const handleChangeEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setInputPassword(e.target.value)
    }
    const loginUserHandler = async () => {
        try {
            const response = await axios.post(`/api/auth/login`, {
                email: inputEmail,
                password: inputPassword,
            });
            console.log(response)
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
            console.log(error);
        }
    }

    const testUserHandler = async () => {
        // console.log("response")
        // setInputEmail("test.test@gmail.com");
        // setPassword("testtest");
        try {
            const response = await axios.post(`/api/auth/login`, {
                email: "test.test@gmail.com",
                password: "testtest",
            });
            console.log(response)
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
            setIsLoggedIn(!isLoggedIn);
            navigate(location?.state?.from?.pathname);
            // console.log("location?.state?.from?.pathname", location?.state?.from?.pathname)
            // navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='auth-container'>
            <div>Sign In</div>
            <div className='auth-sub-container'>
                <div>
                    <label>Email: </label>
                    <input id='user-email' onChange={handleChangeEmail} placeholder='test@gmail.com' type="email" required></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input id='user-password' onChange={handleChangePassword} placeholder='password' type="password" required></input>
                </div>
                <div>
                    <button onClick={loginUserHandler}>Sign In</button>
                </div>
                <div>
                    <button onClick={testUserHandler}>Test User</button>
                </div>
                <div>
                    <p>Don't have an account? <a onClick={() => navigate("/signup")}>Sign Up</a> </p>
                </div>
            </div>
        </div>
    )
}