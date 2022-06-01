import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./style.css"
const ConfirmSecurityCode = () => {
    const [fisrtCode, setFirstCode] = useState("");
    const [secondCode, setSecondCode] = useState("");
    const [thirdCode, setThirdCode] = useState("");
    const [fourthCode, setFourthCode] = useState("");
    const inputRef0 = React.createRef();
    const inputRef1 = React.createRef();
    const inputRef2 = React.createRef();
    const inputRef3 = React.createRef();

    const fisrtCodeChange = (e) => {
        setFirstCode(e.target.value);
        if (e.target.value !== "") {
            inputRef1.current.focus();
        }
    }
    const secondCodeChange = (e) => {
        setSecondCode(e.target.value);
        if (e.target.value !== "") {
            inputRef2.current.focus();
        }
        else {
            inputRef0.current.focus();
        }
    }
    const thirdCodeChange = (e) => {
        setThirdCode(e.target.value);
        if (e.target.value !== "") {
            inputRef3.current.focus();
        }
        else {
            inputRef1.current.focus();
        }
    }
    const fourthCodeChange = (e) => {
        setFourthCode(e.target.value);
        if (e.target.value === "") {
            inputRef2.current.focus();
        }
    }
    return (
        <>
            <div className="confirm-security-code">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="confirm-security-code-inner">
                    <h1>Enter your security code</h1>
                    <div className="sub-title">
                        <p>We texted your code to your email</p>
                    </div>
                    <div className="codeinput-list">
                        <div className="code-input-wrap">
                            <input ref={inputRef0} autoFocus value={fisrtCode} onChange={(e) => fisrtCodeChange(e)} type="text" maxLength={1} />
                        </div>
                        <div className="code-input-wrap">
                            <input value={secondCode} ref={inputRef1} type="text" onChange={(e) => secondCodeChange(e)} maxLength={1} />
                        </div>
                        <div className="code-input-wrap">
                            <input value={thirdCode} ref={inputRef2} type="text" onChange={(e) => thirdCodeChange(e)} maxLength={1} />
                        </div>
                        <div className="code-input-wrap">
                            <input value={fourthCode} ref={inputRef3} type="text" onChange={(e) => fourthCodeChange(e)} maxLength={1} />
                        </div>
                    </div>
                    <Link to="" className="code-confirm-button">Continue</Link>
                </div>
            </div>
        </>
    )
}
export default ConfirmSecurityCode