import React, { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";
const Register = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordConfirmShow, setPasswordConfirmWrap] = useState(false)
    return (
        <>
            <div className="register">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="register-inner">
                    <h1>Create an account</h1>
                    <div className="email-wrap">
                        <input name="aaa" placeholder="Enter Email" />
                    </div>
                    <div className="password-wrap">
                        <input type={passwordShow ? "text" : "password"} placeholder="password" />
                        <button onClick={() => setPasswordShow(!passwordShow)}><img alt="" src="image/password-show.svg" /></button>
                    </div>
                    <div className="password-wrap">
                        <input type={passwordConfirmShow ? "text" : "password"} placeholder="Confirm Passward" />
                        <button onClick={() => setPasswordConfirmWrap(!passwordConfirmShow)}><img alt="" src="image/password-show.svg" /></button>
                    </div>
                    <div className="register-agree-wrap">
                        <input type="checkbox" />
                        <p>By Register i agree that i’m 18 years of age or older, ot the<Link to="">User Agreements, Privacy Policy, Cookie Policy.</Link></p>
                    </div>
                    <div>
                        <Link to="/SecurityCode" className="sign-in-button">Register</Link>
                    </div>
                    <div className="go-login-wrap">
                        <h5>Already have an account?</h5>
                        <Link to="/login"> Sign in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;