import React, { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { login, logout, onUserStateChanged } from "../api/firebase";
import User from "../Components/User";

const Header = () => {
  useEffect(() => {
    onUserStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const [user, setUser] = useState(null);
  const handleLogin = async () => {
    login().then((user) => {
      setUser(user);
    });
  };

  const handleLogout = async () => {
    logout().then(() => {
      setUser(null);
    });
  };

  return (
    <header className="flex items-center justify-between py-3 border-b border-gray-300">
      <div className="flex items-center ml-3">
        <FiShoppingBag className="text-3xl text-brand" />
        <div className="text-4xl text-brand">Shoppy</div>
      </div>
      <nav className="flex items-center gap-4">
        {user && user.isAdmin && (
          <Link to="/products" className="font-semibold">
            Products
          </Link>
        )}

        {user && user.isAdmin && (
          <Link to="/carts" className="font-semibold">
            Carts
          </Link>
        )}
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
            <User user={user} />
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
