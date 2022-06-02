import React from "react";
import "./style.css";
const SingleCoin = ({ coinName, logogram, price }) => {
    return (
        <>
            <div className="coin-wrap-animation">
                <span>
                    <span>
                        <div className="coin-wrap">
                            <div className="coin-name">
                                <img alt="" src={`image/${coinName}.svg`} />
                                <h5>{coinName}</h5>
                                <p>{logogram}</p>
                            </div>
                            <div className="coin-price">
                                <h5>{`${price}`}</h5>
                                <p>+2%</p>
                                <img alt="" src="image/mask.svg" />
                            </div>
                            <div className="coin-graph">
                                <img className="up" alt="" src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" />
                            </div>
                        </div>
                    </span>
                </span>

            </div>
        </>
    )
}
export default SingleCoin;