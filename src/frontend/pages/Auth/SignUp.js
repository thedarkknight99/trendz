import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router';

import "./auth.css";

export const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const signUpHandler = async () => {
        try {
            const response = await axios.post(`/api/auth/signup`, {
                firstName: firstName,
                lastName: lastName,
                email: inputEmail,
                password: inputPassword,
            });
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setInputPassword(e.target.value)
    }
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    // const loginUserHandler = async () => {
    //     try {
    //         const response = await axios.post(`/api/auth/login`, {
    //             email: inputEmail,
    //             password: inputPassword,
    //         });
    //         console.log(response)
    //         // saving the encodedToken in the localStorage
    //         localStorage.setItem("token", response.data.encodedToken);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const testUserHandler = async () => {
    //     // console.log("response")
    //     // setInputEmail("test.test@gmail.com");
    //     // setPassword("testtest");
    //     try {
    //         const response = await axios.post(`/api/auth/login`, {
    //             email: "test.test@gmail.com",
    //             password: "testtest",
    //         });
    //         console.log(response)
    //         // saving the encodedToken in the localStorage
    //         localStorage.setItem("token", response.data.encodedToken);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        <div className='auth-container'>
            <div>Sign Up</div>
            <div className='auth-sub-container'>
                <div>
                    <label>First Name: </label>
                    <input id='user-firstname' onChange={handleChangeFirstName} placeholder='John' type="text" required></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input id='user-lastname' onChange={handleChangeLastName} placeholder='Doe' type="text" required></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input id='user-email' onChange={handleChangeEmail} placeholder='test@gmail.com' type="email" required></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input id='user-password' onChange={handleChangePassword} placeholder='password' type="password" required></input>
                </div>
                <div>
                    <button onClick={signUpHandler}>Create New Account</button>
                </div>
                <div>
                    <p className='already-have-account' onClick={() => navigate("/login")}>Already have an account </p>
                </div>
            </div>
        </div>
    )
}