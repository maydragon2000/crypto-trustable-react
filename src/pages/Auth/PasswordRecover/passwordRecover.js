import React from "react";
import "./style.css"
import { Link } from "react-router-dom"
const PasswordRecover = () => {
    return (
        <>
            <div className="password-recover">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="password-recover-inner">
                    <h1>Password Recovery</h1>
                    <p>Enter your email to recover your password</p>
                    <div className="email-wrap">
                        <input name="aaa" placeholder="email" />
                    </div>
                    <Link to="" className="reset-password-button">Reset Password</Link>
                </div>
            </div>
        </>
    )
}
export default PasswordRecover;