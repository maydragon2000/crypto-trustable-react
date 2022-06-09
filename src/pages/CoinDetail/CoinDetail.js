import React, { useState } from "react"
import "./style.css";
import { FaStar } from "react-icons/fa"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { MdShowChart } from "react-icons/md"
import { GoClock } from "react-icons/go";
import TableFilterCategory from "../../component/TableFilterCategory/TableFilterCategory";
import MarketTable from "../../component/MarketTable/MarketTable";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaFlag } from "react-icons/fa"
import { BsFillLightningChargeFill } from "react-icons/bs"
import SelectCoin from "../../component/SelectCoin/SelectCoin";
const CoinDetail = () => {
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
    }
    ]);
    const [LimitCheck, setLimitCheck] = useState(true);
    const limitChecked = () => {
        setLimitCheck(true);
    }
    const marketChecked = () => {
        setLimitCheck(false);
    }
    return (
        <>
            <div className="currencies">
                {/* <div className="coin-detail-inner"> */}
                <div className="left">
                    <div className="market-status">
                        <h5>Market status</h5>
                        <div className="d-flex row">
                            <div className="col-6">
                                <div className="coin-name">
                                    <img alt="" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />
                                    <h5>Bitcoin</h5>
                                    <p>BTC</p>
                                    <div className="star-wrap">
                                        <FaStar color="blue" />
                                    </div>
                                </div>
                                <div className="coin-number ">
                                    <p className="rank" >Rank #1</p>
                                    <p className="type">Coin</p>
                                    <p className="watch-number" >On 2,771,773 watchlists</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="coin-price">
                                    <div className="first">
                                        <div className="left">
                                            <h4>$43,975.72</h4>
                                            <p className="percent" >+2%</p>
                                            <img alt="" src="image/mask.svg" />
                                        </div>
                                        <div className="right">
                                            <p>Bitcoin Price(USD)</p>
                                            <AiOutlineExclamationCircle color="#6C7080" />
                                        </div>
                                    </div>
                                    <div className="filter">
                                        <p><img alt="" src="image/coindetail/high-low-price.svg" /> High / Low Price</p>
                                        <select name="cars" id="24h">
                                            <option value="24h" >24h</option>
                                            <option value="hour">1h</option>
                                            <option value="month">1 month</option>
                                            <option value="year">1 year</option>
                                        </select>
                                    </div>
                                    <progress id="file" value="32" max="100"> 32% </progress>
                                    <div className="detail-price">
                                        <p className="low-price">Low : $37,005.19</p>
                                        <p className="high-price" >High : $37,005.19</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-items">
                            <div className="detail-item-wrap">
                                <p className="title" ><MdShowChart color="#5367FF" /> Market Cap</p>
                                <h5>$826,445,951,378</h5>
                                <p>+2% <img alt="" src="image/mask.svg" /></p>
                            </div>
                            <div className="detail-item-wrap">
                                <p className="title" ><AiOutlineExclamationCircle color="#5367FF" /> Full Diluted</p>
                                <h5>$915,435,574,336</h5>
                                <p>+2% <img alt="" src="image/mask.svg" /></p>
                            </div>
                            <div className="detail-item-wrap">
                                <p className="title" ><GoClock color="#5367FF" /> 24 Volume</p>
                                <h5>$22,822,762,169</h5>
                                <p>+2% <img alt="" src="image/mask.svg" /></p>
                            </div>
                            <div className="detail-item-wrap">
                                <p className="title" ><AiOutlineExclamationCircle color="#5367FF" /> Circulating Supply</p>
                                <h5>18,958,437.00 BTC</h5>
                                <p className="supply">Max supply 21,000,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="trade-history-table">
                        <div className="trade-history-table-header">
                            <h5>Trade History</h5>
                            <select name="cars" id="24h">
                                <option value="24h" >24h</option>
                                <option value="hour">1h</option>
                                <option value="month">1 month</option>
                                <option value="year">1 year</option>
                            </select>
                        </div>
                        <div className="d-flex" style={{ marginBottom: "40px" }}>
                            <TableFilterCategory name="Trade Market" type="normal" />
                            <TableFilterCategory name="Open Order" type="normal" />
                            <TableFilterCategory name="Open History" type="normal" />
                            <TableFilterCategory name="Trade History" type="normal" />
                            <TableFilterCategory name="Portfolio" type="normal" />
                            <TableFilterCategory name="Watchlist" type="normal" />
                        </div>
                        <MarketTable smallType={false} marketData={marketData} />
                    </div>
                </div>
                <div className="currency-right">
                    <div className="buy-crypto">
                        <Tabs default={1}>
                            <TabList>
                                <Tab>Send BTC</Tab>
                                <Tab>Receive BTC</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="buy-content">
                                    {/* <div className="first row">
                                        <div className="col-6">
                                            <button onClick={() => limitChecked()}>
                                                <input type="radio" readOnly checked={LimitCheck} name="fav_language" />
                                                <FaFlag />
                                                Limit
                                            </button>
                                            <p><img alt="" src="image/wallet.svg" />$38,447.54</p>
                                        </div>
                                        <div className="col-6">
                                            <button onClick={() => marketChecked()}>
                                                <input type="radio" readOnly checked={!LimitCheck} name="fav_language" />
                                                <BsFillLightningChargeFill />
                                                Market
                                            </button>
                                            <p><img alt="" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />$38,447.54</p>
                                        </div>
                                    </div> */}
                                    <SelectCoin label="Quantity(BTC)" placeholder="$0" marketData={marketData} initialId={0} />

                                    <div className="coin-selection-wrap ">
                                        <div className="input-wrap">
                                            <p>Address For send</p>
                                            <input placeholder="address" />
                                        </div>
                                    </div>
                                    <p className="total">Total: (+Fee 0.2) 0.00</p>
                                    <button className="buy-button">Send BTC</button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="buy-content">
                                    {/* <div className="first row">
                                        <div className="col-6">
                                            <button onClick={() => limitChecked()}>
                                                <input type="radio" readOnly checked={LimitCheck} name="fav_language" />
                                                <FaFlag />
                                                Limit
                                            </button>
                                            <p><img alt="" src="image/wallet.svg" />$38,447.54</p>
                                        </div>
                                        <div className="col-6">
                                            <button onClick={() => marketChecked()}>
                                                <input type="radio" readOnly checked={!LimitCheck} name="fav_language" />
                                                <BsFillLightningChargeFill />
                                                Market
                                            </button>
                                            <p><img alt="" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />$38,447.54</p>
                                        </div>
                                    </div> */}
                                    <SelectCoin label="Quantity(BTC)" placeholder="$0" marketData={marketData} initialId={0} />

                                    <div className="coin-selection-wrap ">
                                        <div className="input-wrap">
                                            <p>Address For Receive</p>
                                            <input placeholder="address" />
                                        </div>
                                    </div>
                                    <p className="total">Total: (+Fee 0.2) 0.00</p>
                                    <button className="buy-button">Receive BTC</button>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}
export default CoinDetail;