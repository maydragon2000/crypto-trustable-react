import React from "react";
import { Line } from 'react-chartjs-2';
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
const CoinRow = ({ item, index }) => {
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
    return (
        <>
            <tr>
                <td className="index"><img alt="" src="image/market/star.svg" /> {index + 1}</td>
                <td className="name">
                    <img alt="" src={`image/market/${item.name.image}.svg `} />
                    <h5>{item.name.fullName}</h5>
                    <p>{item.name.logogram}</p>
                </td>
                <td className="price">{item.price}</td>
                <td className="percent" style={{ color: item.increase ? "#03A66D" : "#DC2626" }} >{item.percent}</td>
                <td className="high-price">{item.highPrice}</td>
                <td className="low-price">{item.lowPrice}</td>
                <td className="chart"><Line height={40} width={114} options={options} data={data} /></td>
            </tr>
        </>
    )
}
export default CoinRow;