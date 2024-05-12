import React from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg'
import { IoExitOutline } from "react-icons/io5";
import { CiSearch , CiHeart  , CiShoppingCart} from "react-icons/ci";

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div className="container">
    <div className='navbar'>
        <NavLink className="navbar__logo" to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <div className='nav__list'>
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/shop"}>
          <p>Shop</p>
        </NavLink>
        <NavLink to={"/plantcare"}>
          <p>Plant Care</p>
        </NavLink>
        <NavLink to={"/blogs"}>
          <p>Blogs</p>
        </NavLink>
        </div>
        <div className='nav__logo'>
        <CiSearch />
        <NavLink to={"/cart"}>
          <CiShoppingCart/>
        </NavLink>
        <NavLink to={"/wishlist"}>
          <CiHeart/>
        </NavLink>
        <button><IoExitOutline />Login</button>
        </div>

    </div>
    </div>
  )
}

export default Navbar