import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    return (
        <>
            <div className="login">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="login-inner">
                    <h1>Sign In to Dynamic</h1>
                    <div className="email-wrap">
                        <input name="aaa" placeholder="email" />
                    </div>
                    <div className="password-wrap">
                        <input type={passwordShow ? "text" : "password"} placeholder="password" />
                        <button onClick={() => setPasswordShow(!passwordShow)}><img alt="" src="image/password-show.svg" /></button>
                    </div>
                    <div className="forgot-password-wrap">
                        <p>Scan to login</p>
                        <Link to="/password-recover">Forgot Password?</Link>
                    </div>
                    <div>
                        <Link to="" className="sign-in-button">Sign in</Link>
                    </div>
                    <div className="go-register-wrap">
                        <h5>If you don’t have an account you can</h5>
                        <Link to="/register">Register Here!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;