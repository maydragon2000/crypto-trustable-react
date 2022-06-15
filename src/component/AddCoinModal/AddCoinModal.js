import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Select, { defaultTheme } from "react-select"
import "./style.css"
const AddCoinModal = ({ modalShow, onCloseModal }) => {
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
    let options = [];
    useEffect(() => {
        marketData.map((item, index) => {
            options.push({ value: index + 1, label: item.name.logogram, image: item.id, fullName: item.name.fullName })
        })
    })
    const [selectedValue, setSelectedValue] = useState(undefined);
    const onSelectChange = (value) => {
        setSelectedValue(value);
    }
    return (
        <>
            <Modal
                show={modalShow}
                onHide={onCloseModal}
                aria-labelledby="ModalHeader"
                className="add-coin-modal"
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title id='ModalHeader'>Add Coins</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Select
                        components={{ DropdownIndicator, IndicatorSeparator: null }}
                        isClearable={true}
                        menuIsOpen
                        isMulti
                        options={options}
                        formatOptionLabel={item => (<div className="coin-column"><img alt="" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.image}.png`} /><p>{item.fullName}</p>{item.label}</div>)}
                        placeholder="Search..."
                        tabSelectsValue={false}
                        // value={selectedValue}
                        // onChange={onSelectChange}
                        autoFocus
                    // blurInputOnSelect
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className="footer-button">OK</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default AddCoinModal;
const { colors } = defaultTheme;
const DropdownIndicator = () => (
    <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
        <Svg>
            <path
                d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </Svg>
    </div>
);

const Svg = p => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        {...p}
    />
);