import React, { useState } from "react";
import AddCoinModal from "../../../component/AddCoinModal/AddCoinModal";
import { GoPlus } from "react-icons/go"
import { useNavigate } from "react-router-dom";
import "./style.css"
const Wallet = () => {
    const walletBalance = [
        {
            coinName: "Bitcoin",
            available: 1,
            id: 1,
            usdValuatioin: 25754.70,
            coinLogogram: "BTC"
        },
        {
            coinName: "Ethereum",
            available: 1027,
            id: 1027,
            usdValuatioin: 1547740.35,
            coinLogogram: "ETH"
        },
        {
            coinName: "Binance",
            available: 1839,
            id: 1839,
            usdValuatioin: 441893.31,
            coinLogogram: "BNB"
        },
        {
            coinName: "Tether",
            available: 825,
            id: 825,
            usdValuatioin: 825,
            coinLogogram: "USDT"
        },
        {
            coinName: "XRP",
            available: 52,
            id: 52,
            usdValuatioin: 19.76,
            coinLogogram: "XRP"
        },
    ]
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    const onOpenModal = () => {
        setModalShow(true);
    }
    const onCloseModal = () => {
        setModalShow(false);
    }
    const onClickToken = (token) => {
        navigate(`/profile/walletHistory/${token.coinName}/${token.id}`);
    }
    return (
        <>
            <div className="wallet">
                <h1>
                    Wallet
                </h1>
                <div className="wallet-button-wrap">
                    <button onClick={onOpenModal}><GoPlus />Add Coin</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="coinName">
                                Coin
                            </th>
                            <th className="coin-available">
                                Available
                            </th>
                            <th className="usd-valuation">
                                USD Valuation
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            walletBalance.map((item, index) => <tr key={index} onClick={() => onClickToken(item)}>
                                <td className="coinName">
                                    <img alt="" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`} />
                                    {item.coinName}
                                </td>
                                <td className="coin-available">
                                    {item.available} {item.coinLogogram}
                                </td>
                                <td className="usd-valuation">
                                    {item.usdValuatioin} USD
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <AddCoinModal modalShow={modalShow} onCloseModal={onCloseModal} />
        </>
    )
}
export default Wallet;