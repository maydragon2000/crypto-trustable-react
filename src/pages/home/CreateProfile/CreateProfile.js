import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { RiArrowRightSLine } from "react-icons/ri"
const CreateProfile = () => {
    return (
        <>
            <div className="create-profile ">
                <div className="create-profile-inner row">
                    <div className="col-6 left">
                        <p className="title">Create Profile</p>
                        <h1>Easy Way to Get Started</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                        <div className="link-wrap">
                            <Link to="">Start Trading</Link>
                            <Link to="">
                                <RiArrowRightSLine />
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 right">
                        <div className="d-flex">
                            <div className="create-profile-item">
                                <img alt="" src="image/create-account.svg" />
                                <h5>Create an Account</h5>
                                <p>Sign up with your email and mobile in just 5 minutes</p>
                            </div>
                            <div className="create-profile-item">
                                <img alt="" src="image/verify-bank-account.svg" />
                                <h5>Verify Bank Account</h5>
                                <p>Verify Your Bank Account in Easy Way</p>
                            </div>
                        </div>
                        <div className="d-flex" style={{ paddingLeft: "50px" }}>
                            <div className="create-profile-item">
                                <img alt="" src="image/add-funds.svg" />
                                <h5>Add Funds to Wallet</h5>
                                <p>Quickly add money to your investment wallet</p>
                            </div>
                            <div className="create-profile-item" style={{ marginRight: "0px" }} >
                                <img alt="" src="image/trading-instantly.svg" />
                                <h5>Start Tranding Instantly</h5>
                                <p>Buy & Sell a variety of top coins at the best prices</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default CreateProfile;