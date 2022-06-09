import React from "react";
import "./style.css"
import { Link } from "react-router-dom"
const ConfirmRecoveryPhrase = () => {
    var numberList = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"]
    return (
        <>
            <div className="confirm-recovery-phrase">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="confirm-recovery-phrase-inner">
                    <h1>Confirm Recovery Phrase</h1>
                    <p>Enter your Recovery Phrase</p>
                    <div className="phrase-list-wrap">
                        {
                            numberList.map((item, index) => <div key={index} className="email-wrap">
                                <input autoFocus={index === 0 ? true : false} placeholder={`${item} word`} />
                            </div>)
                        }
                    </div>
                    <div className="confirm-recovery-phrase-button-wrap">
                        <Link to="/ResetPassword" className="confirm-recovery-phrase-button">continue</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ConfirmRecoveryPhrase;