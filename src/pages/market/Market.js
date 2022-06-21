import React, { useState } from "react";
import "./style.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import SingleCoin from "../../component/singlecoin/SingleCoin";
import MarketTable from "../../component/MarketTable/MarketTable";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri"
import SearchDropdown from "../../component/searchDropdown/SearchDropdown";
const Market = () => {
    const { isAuth } = useSelector((state) => state.user);
    const [rightMarketData, setRightMarketData] = useState([{
        name: {
            image: "bitcoin",
            fullName: "Bitcoin",
            logogram: "BTC"
        },
        id: 1,
        price: "$43,975.72",
        percent: "+0.60%",
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

        increase: true
    },
    {
        name: {
            image: "polkadot",
            fullName: "Polkadot",
            logogram: "DOT"
        },
        id: 6636,
        price: "$21.71",
        percent: "+0.98%	",

        increase: true
    },

    {
        name: {
            image: "dogecoin",
            fullName: "Dogecoin",
            logogram: "DOGE"
        },
        id: 74,
        price: "$0.1568",
        percent: "-0.08%",

        increase: false

    },
    {
        name: {
            image: "binance",
            fullName: "Binance",
            logogram: "BNB"
        },
        id: 1839,
        price: "$421.10",
        percent: "+1.52%",

        increase: true
    },
    {
        name: {
            image: "cosmos",
            fullName: "Cosmos",
            logogram: "ATOM"
        },
        id: 3635,
        price: "$30.45",
        percent: "+0.20%",

        increase: true
    },
    {
        name: {
            image: "near-protocol",
            fullName: "NEAR Protocol",
            logogram: "NEAR"
        },
        id: 3957,
        price: "$12.65",
        percent: "+1.27%",

        increase: true
    },
    {
        name: {
            image: "tron",
            fullName: "TRON",
            logogram: "TRX"
        },
        id: 1958,
        price: "$0.0704",
        percent: "+2.77%",

        increase: true
    },
    {
        name: {
            image: "algorand",
            fullName: "Algorand",
            logogram: "ALGO"
        },
        id: 5994,
        price: "$1.02",
        percent: "+0.43%",

        increase: true
    },
    {
        name: {
            image: "bitcoin-cash",
            fullName: "Bitcoin Cash",
            logogram: "BCH"
        },
        id: 3717,
        price: "$345.91",
        percent: "+1.97%",

        increase: true
    },
    {
        name: {
            image: "stellar",
            fullName: "Stellar",
            logogram: "XLM"
        },
        id: 4687,
        price: "$0.2388",
        percent: "+1.20%",

        increase: true
    },
    {
        name: {
            image: "terra",
            fullName: "Terra",
            logogram: "LUNA"
        },
        id: 4943,
        price: "$56.25",
        percent: "+2.51%",

        increase: true
    },
    ]);
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
    },
    {
        name: {
            image: "polkadot",
            fullName: "Polkadot",
            logogram: "DOT"
        },
        id: 6636,
        price: "$21.71",
        percent: "+0.98%	",
        highPrice: "$22.21	",
        lowPrice: "$21.42	",
        increase: true
    },

    {
        name: {
            image: "dogecoin",
            fullName: "Dogecoin",
            logogram: "DOGE"
        },
        id: 74,
        price: "$0.1568",
        percent: "-0.08%",
        highPrice: "$0.1607	",
        lowPrice: "$0.1557",
        increase: false
    },
    {
        name: {
            image: "binance",
            fullName: "Binance",
            logogram: "BNB"
        },
        id: 1839,
        price: "$421.10",
        percent: "+1.52%",
        highPrice: "$427.39	",
        lowPrice: "$412.90",
        increase: true
    },
    {
        name: {
            image: "cosmos",
            fullName: "Cosmos",
            logogram: "ATOM"
        },
        id: 3635,
        price: "$30.45",
        percent: "+0.20%",
        highPrice: "$31.43",
        lowPrice: "$29.97",
        increase: true
    },
    {
        name: {
            image: "near-protocol",
            fullName: "NEAR Protocol",
            logogram: "NEAR"
        },
        id: 3957,
        price: "$12.65",
        percent: "+1.27%",
        highPrice: "$13.06	",
        lowPrice: "$12.33 ",
        increase: true
    },
    {
        name: {
            image: "tron",
            fullName: "TRON",
            logogram: "TRX"
        },
        id: 1958,
        price: "$0.0704",
        percent: "+2.77%",
        highPrice: "$0.07006	",
        lowPrice: "$0.06806",
        increase: true
    },
    {
        name: {
            image: "algorand",
            fullName: "Algorand",
            logogram: "ALGO"
        },
        id: 5994,
        price: "$1.02",
        percent: "+0.43%",
        highPrice: "$1.04	",
        lowPrice: "$1.01",
        increase: true
    },
    {
        name: {
            image: "bitcoin-cash",
            fullName: "Bitcoin Cash",
            logogram: "BCH"
        },
        id: 3717,
        price: "$345.91",
        percent: "+1.97%",
        highPrice: "$347.29	",
        lowPrice: "$335.88",
        increase: true
    },
    {
        name: {
            image: "stellar",
            fullName: "Stellar",
            logogram: "XLM"
        },
        id: 4687,
        price: "$0.2388",
        percent: "+1.20%",
        highPrice: "$0.2434	",
        lowPrice: "$0.2355	",
        increase: true
    },
    {
        name: {
            image: "terra",
            fullName: "Terra",
            logogram: "LUNA"
        },
        id: 4943,
        price: "$56.25",
        percent: "+2.51%",
        highPrice: "$57.87",
        lowPrice: "$54.63",
        increase: true
    },
    ]);
    const platformList = [
        { value: "1", label: "Ethereum Ecosystem" },
        { value: "2", label: "Asset-Backed Token" },
        { value: "3", label: "TRON Ecosystem" },
        { value: "4", label: "Polkadot" },
        { value: "5", label: "Binance Chain" },
        { value: "6", label: "BNB Smart Chain" },
        { value: "7", label: "Polkadot Ecosystem" },
        { value: "8", label: "HECO Ecosystem" },
        { value: "9", label: "Avalanche Ecosystem" },
        { value: "0", label: "Solana Ecosystem" },
        { value: "11", label: "Wrapped Tokens" },
        { value: "12", label: "Synthetics" },
        { value: "13", label: "ETH 2.0 Staking" },
        { value: "14", label: "Polygon Ecosystem" },
        { value: "15", label: "Fantom Ecosystem" },
        { value: "16", label: "Arbitrum Ecosystem" },
        { value: "17", label: "IoTeX  Ecosystem" },
        { value: "18", label: "Zilliqa  Ecosystem" },
        { value: "19", label: "Cronos  Ecosystem" },
        { value: "20", label: "Injective Ecosystem" },
        { value: "21", label: "BNB Chain" },
    ]
    const [categoryValue, setCategoryValue] = useState(undefined);
    const [algorithmValue, setAlgorithmValue] = useState(undefined);
    const [platformValue, setPlatformValue] = useState(undefined);
    const [industryValue, setIndustryValue] = useState(undefined);
    const clearFilter = () => {
        setCategoryValue(undefined);
        setAlgorithmValue(undefined);
        setPlatformValue(undefined);
        setIndustryValue(undefined);
    }
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);
    const [algorithmIsOpen, setAlgorithmIsOpen] = useState(false);
    const [platformIsOpen, setplatformIsOpen] = useState(false);
    const [industryIsOpen, setindustryIsOpen] = useState(false);
    return (
        <>
            <div className="market">
                <div className="prices-by-marketcap" style={{ display: isAuth ? "none" : "block" }}>
                    <div className="row filter">
                        <div className="col-6 left">
                            <h1>Cryptocurrency Prices by Market Cap</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                        </div>
                        <div className="col-6 right">
                            <img alt="" src="image/filter.svg" />
                            <DropdownButton id="dropdown-item-button" title="Filter">
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                            <img alt="" src="image/calendar.svg" />
                            <input type="date" placeholder="today" />
                        </div>
                    </div>
                    <div className="topcoin-wrap">
                        <SingleCoin coinName="Bitcoin" coinId={1} logogram="BTC" price="38,447.54" />
                        <SingleCoin coinName="Binance" coinId={1839} logogram="BNB" price="38,447.54" />
                        <SingleCoin coinName="Ethereum" coinId={1027} logogram="ETH" price="38,447.54" />
                        <SingleCoin coinName="XRP" coinId={52} logogram="XRP" price="38,447.54" />
                    </div>
                </div>
                <div className="d-flex" style={{ width: "100%", justifyContent: "space-between" }}>
                    <div className="market-unlogin" style={{ width: isAuth ? "70%" : "100%" }}>
                        <div className="filter-bar row">
                            {
                                isAuth ? <div className="col-6 left">
                                    <h5>Market Coins</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div> :
                                    <div className="col-6 left">
                                        <button>Top Gainers</button>
                                        <button>Top Loser</button>
                                        <button>New in market</button>
                                        <button>Top in trading</button>
                                        <button>Top in Volume</button>
                                    </div>
                            }

                            <div className="col-6 right">
                                <div className="search-input-wrap">
                                    <img alt="" className="search-left" src="image/search-left.svg" />
                                    <input placeholder="Search Coin Name" />
                                    <img alt="" className="search-right" src="image/search-right.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="toolbar row">
                            {isAuth ? <div className="left-login col-6">
                                <SearchDropdown isOpen={categoryIsOpen} setIsOpen={setCategoryIsOpen} setAlgorithmIsOpen={setAlgorithmIsOpen} setindustryIsOpen={setindustryIsOpen} setplatformIsOpen={setplatformIsOpen} options={platformList} value={categoryValue} setValue={setCategoryValue} type="login" name="Category" />
                                <SearchDropdown isOpen={algorithmIsOpen} setCategoryIsOpen={setCategoryIsOpen} setIsOpen={setAlgorithmIsOpen} setindustryIsOpen={setindustryIsOpen} setplatformIsOpen={setplatformIsOpen} options={platformList} value={algorithmValue} setValue={setAlgorithmValue} type="login" name="Algorithm" />
                                <SearchDropdown isOpen={platformIsOpen} setCategoryIsOpen={setCategoryIsOpen} setAlgorithmIsOpen={setAlgorithmIsOpen} setindustryIsOpen={setindustryIsOpen} setIsOpen={setplatformIsOpen} options={platformList} value={platformValue} setValue={setPlatformValue} type="login" name="Platform" />
                                <SearchDropdown isOpen={industryIsOpen} setCategoryIsOpen={setCategoryIsOpen} setAlgorithmIsOpen={setAlgorithmIsOpen} setIsOpen={setindustryIsOpen} setplatformIsOpen={setplatformIsOpen} options={platformList} value={industryValue} setValue={setIndustryValue} type="login" name="Industry" />
                            </div> :
                                <div className="left col-6">
                                    <SearchDropdown isOpen={categoryIsOpen} setIsOpen={setCategoryIsOpen} setAlgorithmIsOpen={setAlgorithmIsOpen} setindustryIsOpen={setindustryIsOpen} setplatformIsOpen={setplatformIsOpen} options={platformList} value={categoryValue} setValue={setCategoryValue} type="normal" name="Category" />
                                    <SearchDropdown isOpen={algorithmIsOpen} setCategoryIsOpen={setCategoryIsOpen} setIsOpen={setAlgorithmIsOpen} setindustryIsOpen={setindustryIsOpen} setplatformIsOpen={setplatformIsOpen} options={platformList} value={algorithmValue} setValue={setAlgorithmValue} type="normal" name="Algorithm" />
                                    <SearchDropdown isOpen={platformIsOpen} setCategoryIsOpen={setCategoryIsOpen} setAlgorithmIsOpen={setAlgorithmIsOpen} setindustryIsOpen={setindustryIsOpen} setIsOpen={setplatformIsOpen} options={platformList} value={platformValue} setValue={setPlatformValue} type="normal" name="Platform" />
                                    <SearchDropdown isOpen={industryIsOpen} setCategoryIsOpen={setCategoryIsOpen} setAlgorithmIsOpen={setAlgorithmIsOpen} setIsOpen={setindustryIsOpen} setplatformIsOpen={setplatformIsOpen} options={platformList} value={industryValue} setValue={setIndustryValue} type="normal" name="Industry" />
                                </div>
                            }
                            <div className="right col-6">
                                <select >
                                    <option value="5">Show 5</option>
                                    <option value="10">Show 10</option>
                                    <option value="20">Show 20</option>
                                    <option value="30">Show 30</option>
                                    <option value="40">Show 40</option>
                                    <option value="50">Show 50</option>
                                </select>
                                <Link to=""><img className="icon-filter" alt="" src="image/icon-filter.svg" /></Link>
                                <Link to=""><img className="clear-filter" alt="" src="image/clear-filter.svg" /></Link>
                                <Link to=""><img className="customize" alt="" src="image/customize.svg" /> Customize</Link>
                                <Link onClick={clearFilter} to=""><img className="close" alt="" src="image/close.svg" /> Clear Filter</Link>
                            </div>
                        </div>
                        <MarketTable marketData={marketData} smallType={false} />
                    </div>
                    <div className="right-side" style={{ display: isAuth ? "" : "none" }}>
                        <div className="right-side-coin-market">
                            <div className="header">
                                <Link to="">Top Gainers</Link>
                                <Link to="">Top Loser</Link>
                                <Link to="">New in Market</Link>
                            </div>
                            <MarketTable smallType={true} marketData={rightMarketData} />
                        </div>
                        <div className="right-watchlist-market">
                            <div className="header">
                                <p>Watchlist</p>
                                <Link to=""><RiArrowRightSLine /></Link>
                            </div>
                            <MarketTable smallType={true} marketData={rightMarketData} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Market;