import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { useSelector } from "react-redux";
import { RiArrowUpSLine } from "react-icons/ri"
import { FaFacebookF, FaInstagramSquare, FaYoutube, FaTwitter, FaLinkedin, FaWindows, FaAppStoreIos, FaApple, FaGooglePlay } from "react-icons/fa";
const Footer = (props) => {
    const { isAuth } = useSelector((state) => state.user);
    return (
        <>
            <div className="footer ">
                {isAuth ? <div className="navigation-login">
                    <div className="first">
                        <Link to="">
                            <img alt="" src="image/header-logo.png" />
                            <p>Crypto Trustable</p>
                        </Link>
                        <div className="download-wrap ">
                            <div className="download-item">
                                <FaWindows />
                                <div className="download-item-inner">
                                    <p>Download PC-Client</p>
                                    <h5>Windows</h5>
                                </div>
                            </div>
                            <div className="download-item">
                                <FaAppStoreIos />
                                <div className="download-item-inner">
                                    <p>Download on the</p>
                                    <h5>Windows</h5>
                                </div>

                            </div>
                            <div className="download-item">
                                <FaApple />
                                <div className="download-item-inner">
                                    <p>Download for the</p>
                                    <h5>Mac OS</h5>
                                </div>

                            </div>
                            <div className="download-item">
                                <FaGooglePlay />
                                <div className="download-item-inner">
                                    <p>Get in on</p>
                                    <h5>Google Play</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-login-inner">
                        <div className="exchange">
                            <h5>Exchange</h5>
                            <a>Exchange Home</a>
                            <a>Margin Tranding</a>
                            <a>Derivatives Trading</a>
                            <a>Supercharger</a>
                        </div>
                        <div className="support">
                            <h5>Support</h5>
                            <a>Request form</a>
                            <a>Contact Support</a>
                            <a>FAQ</a>
                            <a>Security</a>
                        </div>
                        <div className="company">
                            <h5>Company</h5>
                            <a>About us</a>
                            <a>Careers</a>
                            <a>News</a>
                            <a>Security</a>
                            <a>Community</a>
                            <a>Announcements</a>
                        </div>
                        <div className="resource">
                            <h5>Resources</h5>
                            <a>Downloads</a>
                            <a>Desktop Aplication</a>
                            <a>Buy Crypto</a>
                            <a>Referral</a>
                            <a>Listing Tranding</a>
                        </div>
                        <div className="newsletter">
                            <h5>Newsletter</h5>
                            <div className="d-flex">
                                <div className="email-wrap">
                                    <input placeholder="email" type="text" />
                                </div>
                                <button>Send</button>
                            </div>
                            {/* <h4>We accept following payment systems</h4> */}
                            {/* <div className="payment-wrap">
                                <div className="payment">
                                    <img alt="" src="image/footer/paypal.svg" />
                                </div>
                                <div className="payment">
                                    <img alt="" src="image/footer/mastercard.svg" />
                                </div>
                                <div className="payment">
                                    <img alt="" src="image/footer/bitcoin.svg" />
                                </div>
                                <div className="payment">
                                    <img alt="" src="image/footer/visa.svg" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div> :
                    <div className="d-flex navigation">
                        <div className="first">
                            <Link to="">
                                <img alt="" src="image/header-logo.png" />
                                <p>Crypto Trustable</p>
                            </Link>
                            <p>Lorem ipsum dolor sit amet,consec egestas nisl condimentum.adipiscing elit. Nibh aenean aliquet amet, neque sit maecenas. Lorem sed egestas nisl condimentum.</p>
                            <div className="social-network">
                                <FaFacebookF />
                                <FaInstagramSquare />
                                <FaYoutube />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                        <div className="exchange">
                            <h5>Exchange</h5>
                            <a>Exchange Home</a>
                            <a>Margin Tranding</a>
                            <a>Derivatives Trading</a>
                            <a>Supercharger</a>
                        </div>
                        <div className="support">
                            <h5>Support</h5>
                            <a>Request form</a>
                            <a>Contact Support</a>
                            <a>FAQ</a>
                            <a>Security</a>
                        </div>
                        <div className="resource">
                            <h5>Resources</h5>
                            <a>Downloads</a>
                            <a>Desktop Aplication</a>
                            <a>Buy Crypto</a>
                            <a>Referral</a>
                            <a>Listing Tranding</a>
                        </div>
                        <div className="learn">
                            <h5>Learn</h5>
                            <a>What’s Trending</a>
                            <a>Product News</a>
                            <a>Events</a>
                            <a>University</a>
                            <a>Research</a>
                            <a>Market Update</a>
                        </div>
                        <div className="company">
                            <h5>Company</h5>
                            <a>About us</a>
                            <a>Careers</a>
                            <a>News</a>
                            <a>Security</a>
                            <a>Community</a>
                            <a>Announcements</a>
                        </div>
                    </div>
                }

                <div className="middle">
                    <a className="scroll-top" href="#header">
                        <RiArrowUpSLine />
                    </a>
                </div>
                <div className="bottom row">
                    <div className="col-6 left">
                        <p className="year">© 2022 dynamic. All rights reserved</p>
                        <a className="privacy">Parivacy</a>
                        <a className="terms">Terms</a>
                        <a className="">Sitemap</a>
                    </div>
                    {isAuth ?
                        <div className="social-network-login col-6">
                            <FaFacebookF />
                            <FaInstagramSquare />
                            <FaYoutube />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                        : <div className="download-wrap col-6 right">
                            <div className="download-item">
                                <FaWindows />
                                <div className="download-item-inner">
                                    <p>Download PC-Client</p>
                                    <h5>Windows</h5>
                                </div>
                            </div>
                            <div className="download-item">
                                <FaAppStoreIos />
                                <div className="download-item-inner">
                                    <p>Download on the</p>
                                    <h5>Windows</h5>
                                </div>

                            </div>
                            <div className="download-item">
                                <FaApple />
                                <div className="download-item-inner">
                                    <p>Download for the</p>
                                    <h5>Mac OS</h5>
                                </div>

                            </div>
                            <div className="download-item">
                                <FaGooglePlay />
                                <div className="download-item-inner">
                                    <p>Get in on</p>
                                    <h5>Google Play</h5>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}
export default Footer;