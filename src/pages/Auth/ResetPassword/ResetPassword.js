import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const ResetPassword = () => {
    return (
        <>
            <div className="reset-password">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="reset-password-inner">
                    <h1>Reset Password</h1>
                    {/* <div className="sub-title">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    </div> */}
                    <p>make your new password</p>
                    <div className="input-wrap">
                        <input name="aaa" placeholder="new password" />
                    </div>
                    <div className="input-wrap">
                        <input name="aaa" placeholder="confirm password" />
                    </div>
                    <Link to="" className="reset-password-button">Reset</Link>
                </div>
            </div>
        </>
    )
}
export default ResetPassword;