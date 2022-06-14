import React from "react";
import "./style.css"
const Sequrity = () => {
    return (
        <>
            <div className="security-profile">
                <h1>Sequrity</h1>
                <h2>Password</h2>
                <p>Set a unique password to protect your personal account.</p>
                <div className="password-change-wrap">
                    <label>Old Password</label>
                    <div className="password-input-wrap">
                        <input type="password" />
                    </div>
                    <div className="password-change-inner-wrap">
                        <div className="new-password">
                            <label>New Password</label>
                            <div className="password-input-wrap">
                                <input type="password" />
                            </div>
                        </div>

                        <div className="reenter-password">
                            <label>Re-enter password</label>
                            <div className="password-input-wrap">
                                <input type="password" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="security-profile-footer">
                    <p>To ensure your account is well protected, please use 8 or more characters with a mix of letters, numbers & symbols.</p>
                    <button>Save Password</button>
                </div>
            </div>
        </>
    )
}
export default Sequrity;