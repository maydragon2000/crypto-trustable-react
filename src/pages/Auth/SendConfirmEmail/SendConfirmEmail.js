import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const SendConfirmEmail = () => {
    return (
        <>
            <div className="send-confirm-email">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="send-confirm-email-inner">
                    <h1>Let’s Confirm it’s really you</h1>
                    <div className="sub-title">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    </div>
                    <p>Get the code by email at</p>
                    <div className="email-wrap">
                        <input name="aaa" placeholder="email" />
                    </div>
                    <Link to="/SecurityCode" className="send-confirm-code-button">Continue</Link>
                </div>
            </div>
        </>
    )
}
export default SendConfirmEmail;