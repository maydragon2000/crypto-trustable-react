import React from "react";
import { Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import "./style.css";
import SelectCurrency from "react-select-currency"
import { Link } from "react-router-dom";
const Header = () => {
    const onSelectedCurrency = currencyAbbrev => {
        console.log(`Selected ${currencyAbbrev}`)
    }
    return (
        <>
            <div id="header" className="header">
                <Navbar expand="lg" bg="black">
                    <NavbarBrand href="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </NavbarBrand>
                    <div className="navlink-wrap">
                        <NavLink href="market">Market</NavLink>
                        <NavLink href="" >Watchlist</NavLink>
                        <NavLink>Portfolio</NavLink>
                        <NavLink>Learn</NavLink>
                    </div>
                    <div className="button-wrap">
                        <SelectCurrency onCurrencySelected={onSelectedCurrency} />
                        <Link to="login" className="login-button">Sign in</Link>
                        <Link to="register" className="register-button">Register</Link>
                    </div>
                </Navbar>
            </div>
        </>
    )
}
export default Header;