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
const SingleCoin = ({ coinName, logogram, price }) => {
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
                data: [1, 3, 2, 5, 4, 7, 5]
            },
        ],
    };

    return (
        <>
            <div className="coin-wrap">
                <div className="coin-name">
                    <img alt="" src={`image/${coinName}.svg`} />
                    <h5>{coinName}</h5>
                    <p>{logogram}</p>
                </div>
                <div className="coin-price">
                    <h5>{`${price}`}</h5>
                    <p>+2%</p>
                    <img alt="" src="image/mask.svg" />
                </div>
                <div className="coin-graph">
                    <Line options={options} data={data} />
                </div>
            </div>
        </>
    )
}
export default SingleCoin;