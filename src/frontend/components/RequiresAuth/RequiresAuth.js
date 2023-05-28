import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

export default function RequiresAuth({ children }) {
    let location = useLocation();
    console.log("requireauth", location)
    const { isLoggedIn } = useContext(AuthContext);

    return (
        isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
    )

    // return isLoggedIn ? children : <Navigate to="/login" />;
}