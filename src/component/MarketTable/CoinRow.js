import React from "react";
import { useNavigate } from "react-router-dom";

const CoinRow = ({ item, index, smallType }) => {
    const navigate = useNavigate();
    const coinClick = () => {
        navigate("/detail");
    }
    return (
        <>
            <tr onClick={() => coinClick()}>
                <td style={{ display: smallType ? "none" : "" }} className="index"><img alt="" src="image/market/star.svg" /> {index + 1}</td>
                <td className="name">
                    <img style={{ borderRadius: "100px" }} alt="" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`} />
                    <h5>{item.name.fullName}</h5>
                    <p>{item.name.logogram}</p>
                </td>
                <td className="price">{item.price}</td>
                <td className="percent" style={{ color: item.increase ? "rgb(22, 199, 132)" : "rgb(234, 57, 67)" }} >{item.percent}</td>
                <td style={{ display: smallType ? "none" : "" }} className="high-price">{item.highPrice}</td>
                <td style={{ display: smallType ? "none" : "" }} className="low-price">{item.lowPrice}</td>
                <td style={{ display: smallType ? "none" : "" }} className="chart">
                    <img style={{ display: item.increase ? "" : "none" }} className="up" alt="" src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${item.id}.svg`} />
                    <img style={{ display: item.increase ? "none" : "" }} className="down" alt="" src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${item.id}.svg`} />
                </td>
            </tr>
        </>
    )
}
export default CoinRow;