import Mockman from "mockman-js";
import { useEffect, useState } from "react";

import "./App.css";
import Header from "./frontend/components/Navbar/Header";
import { Routes, Route } from "react-router-dom"
import { SignIn } from "./frontend/pages/Auth/SignIn";
import { Home } from "./frontend/pages/Home/Home";
import { SignUp } from "./frontend/pages/Auth/SignUp";
import { Cart } from "./frontend/pages/Cart/Cart";
import { WishList } from "./frontend/pages/WishList/WishList";
import { Trending } from "./frontend/pages/Trending/Trending";
import RequiresAuth from "./frontend/components/RequiresAuth/RequiresAuth";
import Products from "./frontend/pages/Products/Products";
import Footer from "./frontend/components/Footer/Footer";


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
  //     console.log("I am afalse")
  //     setIsLoggedIn(false)
  //   }
  //   else if (localStorage.getItem("token") !== "") {
  //     console.log("I am true")
  //     setIsLoggedIn(true)
  //   }

  // })


  return (
    <div className="App">
      <Header />

      {/* <Mockman /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Routes>
        <Route path='/login' element={<SignIn />} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path='/cart' element={<RequiresAuth ><Cart /></RequiresAuth>} />
      </Routes>
      <Routes>
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
      <Routes>
        <Route path='/trending' element={<Trending />} />

      </Routes>
      <Routes>
        <Route path='/products' element={<Products />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
