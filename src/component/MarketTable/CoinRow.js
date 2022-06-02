import React from "react";
import { Line } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
const CoinRow = ({ item, index, smallType }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
    );
    const options = {
        responsive: true,
        elements: {
            point: {
                pointStyle: "circle",
                radius: 1,
            }
        },
        scales: {
            xAxis: {
                display: false,
            },
            yAxis: {
                display: false,
            }
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                borderColor: '#25A1FF',
                backgroundColor: 'red',
                tension: 0.4,
                data: [1, 100000, 20000, 90000, 10000, 90000, 20000]
            },
        ],
    };
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
                <td className="percent" style={{ color: item.increase ? "#03A66D" : "#DC2626" }} >{item.percent}</td>
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