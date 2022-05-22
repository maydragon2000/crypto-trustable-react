import React from "react";
import "./style.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import SingleCoin from "../../component/singlecoin/SingleCoin";
import MarketTable from "../../component/MarketTable/MarketTable";
const Market = () => {

    return (
        <>
            <div className="market">
                <div className="prices-by-marketcap">
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
                        <SingleCoin coinName="Bitcoin" logogram="BTC" price="38,447.54" />
                        <SingleCoin coinName="Binance" logogram="BNB" price="38,447.54" />
                        <SingleCoin coinName="Ethereum" logogram="ETH" price="38,447.54" />
                        <SingleCoin coinName="XRP" logogram="XRP" price="38,447.54" />
                    </div>
                </div>
                <div className="market-unlogin">
                    <MarketTable />
                </div>
            </div>
        </>
    )
}
export default Market;