import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Select, { defaultTheme } from "react-select"
import "./style.css"
const AddCoinModal = ({ modalShow, onCloseModal, selectedValue, setSelectedValue }) => {
    const [marketData, setMarketData] = useState([{
        name: {
            image: "bitcoin",
            fullName: "Bitcoin",
            logogram: "BTC"
        },
        id: 1,
    },
    {
        name: {
            image: "ethereum",
            fullName: "Ethereum",
            logogram: "ETH"
        },
        id: 1027,
    },
    {
        name: {
            image: "polygon",
            fullName: "Polygon",
            logogram: "MATIC"
        },
        id: 3890,
    },
    {
        name: {
            image: "usdc",
            fullName: "United States Dollar",
            logogram: "USDC"
        },
        id: 3408,
    },
    {
        name: {
            image: "tether",
            fullName: "Tether",
            logogram: "USDT"
        },
        id: 825,
    },
    {
        name: {
            image: "avalanche",
            fullName: "Avalanche",
            logogram: "AVAX"
        },
        id: 5805,
    },]);
    let options = [];
    useEffect(() => {
        marketData.map((item, index) => {
            options.push({ value: index + 1, label: item.name.logogram, image: item.id, fullName: item.name.fullName })
        })
    })

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
                        value={selectedValue}
                        onChange={onSelectChange}
                        autoFocus
                    // blurInputOnSelect
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className="footer-button" onClick={onCloseModal}>OK</button>
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