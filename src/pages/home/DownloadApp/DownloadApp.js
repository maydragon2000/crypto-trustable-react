import React from "react";
import "./style.css"
const DownloadApp = () => {
    return (
        <>
            <div className="download-app row">
                <div className="col- left">
                    {/* <img alt="" src="image/trade-instant.png" /> */}
                </div>
                <div className="col-8 right">
                    <p className="title">Download the app</p>
                    <h1>Trade Anywhere, Anytime</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                    <div className="download-items">
                        <div className="download-item">
                            <div className="download-item-inner">
                                <img alt="" src="image/win10.svg" />
                                <h5>Windows</h5>
                                <p>Download PC-Client</p>
                            </div>
                        </div>
                        <div className="download-item">
                            <div className="download-item-inner">
                                <img alt="" src="image/window.svg" />
                                <h5>Windows</h5>
                                <p>Download on the</p>
                            </div>
                        </div>
                        <div className="download-item">
                            <div className="download-item-inner">
                                <img alt="" src="image/MacOs.svg" />
                                <h5>Mac OS</h5>
                                <p>Download for the</p>
                            </div>
                        </div>
                        <div className="download-item">
                            <div className="download-item-inner">
                                <img alt="" src="image/GooglePlay.svg" />
                                <h5>Google Play</h5>
                                <p>Get in on</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DownloadApp;