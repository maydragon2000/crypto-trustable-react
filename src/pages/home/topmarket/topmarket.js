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
                        <SingleCoin coinName="Bitcoin" coinId={1} logogram="BTC" price="38,447.54" />
                        <SingleCoin coinName="Binance" coinId={1839} logogram="BNB" price="38,447.54" />
                        <SingleCoin coinName="Ethereum" coinId={1027} logogram="ETH" price="38,447.54" />
                        <SingleCoin coinName="XRP" coinId={52} logogram="XRP" price="38,447.54" />
                        <SingleCoin coinName="Litecoin" coinId={2} logogram="LTC" price="38,447.54" />
                        <SingleCoin coinName="Polygon" coinId={3890} logogram="MATIC" price="38,447.54" />
                        <SingleCoin coinName="Solana" coinId={5426} logogram="SOL" price="38,447.54" />
                        <SingleCoin coinName="Cardano" coinId={2010} logogram="ADA" price="38,447.54" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopMarket