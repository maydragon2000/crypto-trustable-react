import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { attemptVerifyRecoveryPhrase } from "../../../store/thunks/auth";
import { recoveryPhraseVerify } from "../../../store/actions/user";
import "./style.css"

const ConfirmRecoveryPhrase = () => {
    var numberList = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"]
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var phraseWord = [];
    const sendVerifyData = {
        userName,
        phraseWord
    }
    const onWordChange = (e, index) => {
        phraseWord[index] = e.target.value;
    }
    const verify = () => {
        dispatch(attemptVerifyRecoveryPhrase(sendVerifyData)).then((res) => {
            console.log(res, "res");
            if (res.status === 200) {
                dispatch(recoveryPhraseVerify(res.data.name));
                navigate("/ResetPassword");
            }
        }).catch(({ response }) => {
            console.log(response, "error");
            if (response.status === 404) {
                alert("user is not sign up.");
            }
            if (response.status === 400) {
                alert("recovery phrase is incorrect.");
            }

        })
    }
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
                    <p></p>
                    <div className="username-wrap">
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="userName" />
                    </div>
                    <p>Enter your Recovery Phrase</p>
                    <div className="phrase-list-wrap">
                        {
                            numberList.map((item, index) => <div key={index} className="word-wrap">
                                <input onChange={(e) => onWordChange(e, index)} autoFocus={index === 0 ? true : false} placeholder={`${item} word`} />
                            </div>)
                        }
                    </div>
                    <div className="confirm-recovery-phrase-button-wrap">
                        <button onClick={verify} className="btn confirm-recovery-phrase-button">continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConfirmRecoveryPhrase;