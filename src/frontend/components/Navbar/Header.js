import React, { useContext } from 'react'
// import axios from 'axios';
import "./header.css"
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth/AuthContext';
// import { Navigate } from 'react-router';



const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);

    // const SignUppHandler = async () => {
    //     try {
    //         const response = await axios.post(`/api/auth/signup`, {
    //             firstName: "John",
    //             lastName: "Doe",
    //             email: "john.doe@gmail.com",
    //             password: "johnDoe",
    //         });
    //         // saving the encodedToken in the localStorage
    //         localStorage.setItem("token", response.data.encodedToken);
    //         // console.log(localStorage.getItem("token"))
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    return (
        <div>
            <nav className='navbar'>
                <ul style={{ listStyle: "none" }}>
                    <li className='list-items' onClick={() => navigate("/")}>Trendz</li>
                </ul>
                <ul style={{ listStyle: "none" }} className="header-items">
                    <li className='list-items' onClick={() => navigate("/")}>Home</li>
                    <li className='list-items' onClick={() => navigate("/trending")}>Trending</li>
                    <li className='list-items' onClick={() => navigate("/cart")}>Cart</li>
                    <li className='list-items' onClick={() => navigate("/wishlist")}>WishList</li>
                    {
                        isLoggedIn ? <li className='list-items'><button onClick={() => localStorage.removeItem("token")}>Logout</button></li>
                            : <li className='list-items'><button onClick={() => navigate("/login")}>Sign In</button></li>
                    }

                </ul>
            </nav>


        </div>
    )
}

export default Header