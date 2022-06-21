import React from "react";
import "./style.css";
const SingleCoin = ({ coinName, logogram, price, coinId }) => {
    return (
        <>
            <div className="coin-wrap-animation">
                <span>
                    <span>
                        <div className="coin-wrap">
                            <div className="coin-name">
                                <img alt="" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`} />
                                <h5>{coinName}</h5>
                                <p>{logogram}</p>
                            </div>
                            <div className="coin-price">
                                <h5>{`${price}`}</h5>
                                <p>+2%</p>
                                <img alt="" src="image/mask.svg" />
                            </div>
                            <div className="coin-graph">
                                <img className="up" alt="" src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coinId}.svg`} />
                            </div>
                        </div>
                    </span>
                </span>

            </div>
        </>
    )
}
export default SingleCoin;