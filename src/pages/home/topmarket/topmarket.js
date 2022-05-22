import React from "react";
import "./style.css"
import SingleCoin from "../../../component/singlecoin/SingleCoin";

const TopMarket = () => {
   

    return (
        <>
            <div className="home-top-market">
                <div className="title">
                    <p style={{ color: "#5367FF" }}>Top Market</p>
                    <h1>Get Various Crypto Coin</h1>
                    <div className="topcoin-wrap">
                        <SingleCoin coinName="Bitcoin" logogram="BTC" price="38,447.54" />
                        <SingleCoin coinName="Binance" logogram="BNB" price="38,447.54" />
                        <SingleCoin coinName="Ethereum" logogram="ETH" price="38,447.54" />
                        <SingleCoin coinName="XRP" logogram="XRP" price="38,447.54" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopMarket