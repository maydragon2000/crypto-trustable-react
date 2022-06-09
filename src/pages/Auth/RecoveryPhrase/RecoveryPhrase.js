import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import wordData from "./words.json";
import "./style.css"
const RecoveryPhrase = () => {
    var phrase = [];
    var randomNumber = 0
    for (let i = 0; i < 12; i++) {
        randomNumber = Math.floor(Math.random() * 1001);
        phrase.push(wordData.words[randomNumber]);
    }
    return (
        <>
            <div className="recovery-phrase">
                <div className="logo">
                    <Link to="/">
                        <img alt="" src="image/header-logo.png" />
                        <p>Crypto Trustable</p>
                    </Link>
                </div>
                <div className="recovery-phrase-inner">
                    <h1>Secrect Recovery Phrase</h1>
                    <div className="sub-title">
                        <p >Your secret phrase makes it easy to back up and restore your account.</p>

                    </div>
                    <div className="phrase-list">
                        {
                            phrase.map((item, index) =>
                                <div>
                                    <p>
                                        {index + 1}{" "}{item}
                                    </p>
                                </div>)
                        }
                    </div>
                    <p className="warning"><label>WARNING:</label>  Never disclose your Secret Recovery Phrase.
                        Anyone with this phrase can access your account forever.
                    </p>
                    <div className="recovery-phrase-button-wrap">
                        <Link to="" className="recovery-phrase-button">Continue</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
export default RecoveryPhrase