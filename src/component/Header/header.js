import React, { useState } from "react";
import { Navbar, NavbarBrand, NavLink, Dropdown, DropdownButton } from "react-bootstrap";
import "./style.css";
import SelectCurrency from "react-select-currency"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/actions/user";
const Header = (props) => {
    const { isAuth, user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(isAuth, user, "header");
    const logOut = () => {
        localStorage.removeItem("token");
        navigate("/");
        dispatch(logout());
    }
    const goProfile = () => {
        navigate("/profile")
    }
    return (
        <>
            <div id="header" className="header">
                <Navbar style={{ backgroundColor: isAuth ? "#121318" : "black" }} expand="lg" >
                    <NavbarBrand href="/">
                        <img alt="" src="/image/logo.png" />
                        <p>Crypto Trustable</p>
                    </NavbarBrand>
                    <div className="navlink-wrap">
                        <NavLink href="/market">Market</NavLink>
                        <NavLink href="/watchlist" >Watchlist</NavLink>
                        {/* <NavLink>Portfolio</NavLink> */}
                        <NavLink href="/learn" >Learn</NavLink>
                    </div>
                    <div className="button-wrap">
                        <Link to="/profile/walletHistory/Bitcoin/1" style={{ display: !isAuth ? "none" : "flex" }} className="trade-history-button"><img alt="" src="/image/trade-history.svg" />History</Link>
                        <Link to="/profile/wallet" style={{ display: !isAuth ? "none" : "flex" }} className="wallet-button"><img alt="" src="/image/wallet.svg" /> Wallet</Link>
                        <Link to="/profile" style={{ display: !isAuth ? "none" : "flex" }} className="user-picture"><img alt="" src={user === undefined || user === null ? "" : user.image === undefined ? "/image/user.jpg" : `http://141.95.9.74:5000/images/${user.image}`} /></Link>
                        <DropdownButton style={{ display: !isAuth ? "none" : "flex" }} id="dropdown-item-button" title="Allie Grater">
                            <Dropdown.Item as="button" onClick={goProfile}>Profile</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => logOut()}>Log Out</Dropdown.Item>
                        </DropdownButton>
                        <Link to="/login" style={{ display: isAuth ? "none" : "flex" }} className="login-button">Sign in</Link>
                        <Link to="/register" style={{ display: isAuth ? "none" : "flex" }} className="register-button">Register</Link>
                    </div>
                </Navbar>
            </div>
        </>
    )
}
export default Header;