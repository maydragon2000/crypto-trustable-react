import React, { useState, useEffect } from "react";
import { GoPlus, GoSearch } from "react-icons/go";
import TableFilterCategory from "../../component/TableFilterCategory/TableFilterCategory";
import MarketTable from "../../component/MarketTable/MarketTable";
import ExchangeCoin from "../../component/ExchangeCoin/ExchangeCoin";
import AddCoinModal from "../../component/AddCoinModal/AddCoinModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Watchlist = () => {
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
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.user);
    useEffect(() => {
        if (isAuth === false) {
            navigate('/login');
        }
    })
    const onOpenModal = () => {
        setModalShow(true);
    }
    const onCloseModal = () => {
        setModalShow(false);
    }
    return (
        <>
            <div className="watchlist">
                <div className="watchlist-left">
                    <div className="watchlist-left-header">
                        <div className="title">
                            <h1>Watchlist</h1>
                            <p>Update 16/02/2022 at 02:30 PM</p>
                        </div>
                        {/* <div className="add-coin-button-wrap">
                            <button onClick={onOpenModal}>
                                <GoPlus />
                                Add Coin
                            </button>
                        </div> */}
                    </div>
                    <div className="watchlist-left-filter">
                        {/* <div className="button-wrap">
                            <TableFilterCategory name="Watchlist" type="login" />
                            <button><GoPlus /></button>
                        </div> */}
                        <div className="add-coin-button-wrap">
                            <button onClick={onOpenModal}>
                                <GoPlus />
                                Add Coin
                            </button>
                        </div>
                        <div className="search-wrap">
                            <GoSearch />
                            <input type="text" placeholder="Search $ Trade" />
                        </div>
                    </div>
                    <MarketTable smallType={false} marketData={marketData} />
                </div>
                <div className="watchlist-right">
                    <div className="watchlist-right-up">
                        <ExchangeCoin />
                    </div>
                    <div className="watchlist-right-down">
                        <div className="watchlist-right-down-header">
                            <TableFilterCategory type="normal" name="Top Gainers" />
                            <TableFilterCategory type="normal" name="Top Gainers" />
                            <TableFilterCategory type="normal" name="Top Gainers" />
                        </div>
                        <MarketTable smallType={true} marketData={marketData} />
                    </div>
                </div>
            </div>
            <AddCoinModal modalShow={modalShow} onCloseModal={onCloseModal} />
        </>
    )
}
export default Watchlist
