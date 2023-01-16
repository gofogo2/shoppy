import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 border-b border-gray-300" >
      <div className="flex  items-center ml-3" >
        <FiShoppingBag className="text-3xl text-brand" />
        <div className="text-4xl text-brand" >Shoppy</div>
      </div>
      <nav className="flex items-center gap-4" >
        <Link to="/products" className="font-semibold" >Products</Link>
        <Link to="/carts" className="font-semibold" >Carts</Link>
        <div  >
        <Link to="/"><MdModeEdit className="text-2xl" /></Link>
        </div>
        <Link to="/" className="font-semibold mr-3" >Login</Link>
      </nav>
    </header>
  );
};

export default Header;
