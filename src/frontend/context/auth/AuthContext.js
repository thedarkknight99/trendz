import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({ isLoggedIn: false });

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const token = localStorage.getItem("token") || ""
    // useEffect(() => {
    //     if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
    //         console.log("I am afalse")
    //         setIsLoggedIn(false)
    //     }
    //     else if (localStorage.getItem("token") !== "") {
    //         console.log("I am true")
    //         setIsLoggedIn(true)
    //     }
    // })

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )

}

