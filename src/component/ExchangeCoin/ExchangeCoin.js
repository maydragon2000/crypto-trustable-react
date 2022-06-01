import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectCoin from "../SelectCoin/SelectCoin";
import "./style.css"
const ExchangeCoin = () => {
    const [marketData, setMarketData] = useState([{
        name: {
            image: "bitcoin",
            fullName: "Bitcoin",
            logogram: "BTC"
        },
        id: 1,
        price: "$43,975.72",
        percent: "+0.60%",
        highPrice: "$44,727.80	",
        lowPrice: "$43,318.64",
        increase: true
    },
    {
        name: {
            image: "ethereum",
            fullName: "Ethereum",
            logogram: "ETH"
        },
        id: 1027,
        price: "$3,187.62",
        percent: "-2.79%",
        highPrice: "$3,263.16",
        lowPrice: "$3,077.03",
        increase: false
    },
    {
        name: {
            image: "xrp",
            fullName: "XRP",
            logogram: "XRP"
        },
        id: 52,
        price: "$0.8721",
        percent: "+1.40%",
        highPrice: "$0.9091		",
        lowPrice: "$0.8484	",
        increase: true
    },
    {
        name: {
            image: "litecoin",
            fullName: "Litecoin",
            logogram: "LTC"
        },
        id: 2,
        price: "$138.61",
        percent: "+0.38%",
        highPrice: "$140.79		",
        lowPrice: "$136.92	",
        increase: true
    },
    {
        name: {
            image: "polygon",
            fullName: "Polygon",
            logogram: "MATIC"
        },
        id: 3890,
        price: "$1.98",
        percent: "+2.46%	",
        highPrice: "$2.06		",
        lowPrice: "$1.91",
        increase: true
    },
    {
        name: {
            image: "solana",
            fullName: "Solana",
            logogram: "SOL"
        },
        id: 5426,
        price: "$112.13",
        percent: "+1.06%",
        highPrice: "$116.83		",
        lowPrice: "$110.66",
        increase: true
    },
    {
        name: {
            image: "usdc",
            fullName: "United States Dollar",
            logogram: "USDC"
        },
        id: 3408,
        price: "$42164.54",
        percent: "+7.76%",
        highPrice: "$42164.54	",
        lowPrice: "$42164.54",
        increase: true
    },
    {
        name: {
            image: "cardano",
            fullName: "Cardano",
            logogram: "ADA"
        },
        id: 2010,
        price: "$1.18",
        percent: "-0.33%",
        highPrice: "$1.21		",
        lowPrice: "$1.21	",
        increase: false
    },
    {
        name: {
            image: "tether",
            fullName: "Tether",
            logogram: "USDT"
        },
        id: 825,
        price: "$42164.54",
        percent: "+7.76%",
        highPrice: "$42164.54",
        lowPrice: "$42164.54",
        increase: true
    },
    {
        name: {
            image: "avalanche",
            fullName: "Avalanche",
            logogram: "AVAX"
        },
        id: 5805,
        price: "$89.62",
        percent: "+2.44%",
        highPrice: "$91.93	",
        lowPrice: "$87.38	",
        increase: true
    },]);
    return (
        <>
            <div className="exchange-coin">
                <h5>Exchange Coins</h5>
                <div className="price-status">
                    <p>
                        <img alt="" src="image/wallet.svg" />
                        $38,447.54
                    </p>
                    <p>
                        <img alt="" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />
                        $38,447.54
                    </p>
                </div>
                <SelectCoin label="Coin" placeholder="1.0" marketData={marketData} initialId={0} />

                <p className="exchange-wrap">
                    <img alt="" src="image/exchange.svg" />
                </p>
                <SelectCoin label="Coin" placeholder="1.0" marketData={marketData} initialId={1} />
                <p className="fee">No extra fees:</p>
                <div className="exchange-button-wrap">
                    <Link to="" className="exchange-button">Exchange</Link>
                </div>
            </div>
        </>
    )
}
export default ExchangeCoin