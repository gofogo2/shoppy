import React, { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { login, logout, onUserStateChanged } from "../api/firebase";

const Header = () => {


  useEffect(()=>{
    onUserStateChanged((user)=>{
        console.log(user);
        setUser(user);
    });
  })

  const [user, setUser] = useState(null);
  const handleLogin = async () => {
    console.log("aaa");
    login().then((user) => {
      console.log(user);
      setUser(user);
    });
  };

  const handleLogout = async () => {
    console.log("aaa");
    logout().then(() => {
      setUser(undefined);
    });
  };

  return (
    <header className="flex items-center justify-between py-3 border-b border-gray-300">
      <div className="flex items-center ml-3">
        <FiShoppingBag className="text-3xl text-brand" />
        <div className="text-4xl text-brand">Shoppy</div>
      </div>
      <nav className="flex items-center gap-4">
        <Link to="/products" className="font-semibold">
          Products
        </Link>
        <Link to="/carts" className="font-semibold">
          Carts
        </Link>
        <div>
          <Link to="/">
            <MdModeEdit className="text-2xl" />
          </Link>
        </div>
        {user === null ? (
          <button onClick={() => handleLogin()} className="mr-3 font-semibold">
            Login
          </button>
        ) : (
          <div className="flex">
            <img className="w-10 mr-2 rounded-full " src={user.photoURL} />{" "}
            <button
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
