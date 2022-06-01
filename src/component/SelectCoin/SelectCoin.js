import React, { useState } from "react";
import "./style.css"
const SelectCoin = ({ marketData, label, placeholder, initialId }) => {

    const [spanClass, setSpanClass] = useState("");
    const selectDropdownClick = () => {
        if (spanClass === "")
            setSpanClass("active");
        else
            setSpanClass("");
    }
    const [selectedId, setSelectedId] = useState(initialId);
    const coinSelect = (index) => {
        setSelectedId(index);
        setSpanClass("");
    }
    return (
        <>
            <section className="coin-selection-wrap">
                <div className="input-wrap">
                    <p>{label}</p>
                    <input type="text" placeholder={placeholder} />
                </div>
                <div className="select-wrap">
                    <div className={`custom-select ${spanClass}`} id="custom-select">
                        <span id="placeholder" onClick={() => selectDropdownClick()} className="placeholder">
                            <span className="img-wrapper">
                                <img alt="" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${marketData[selectedId].id}.png`} />
                            </span>
                            <span className="text"> {marketData[selectedId].name.logogram}</span>
                        </span>
                        <ul className="dropdown" id="dropdown">
                            {
                                marketData.map((item, index) =>
                                    <li className="dd-item" key={index} onClick={() => coinSelect(index)} style={{ cursor: "pointer" }} >
                                        <span className="img-wrapper">
                                            <img alt="" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`} />
                                        </span>
                                        <span className="text">{`${item.name.fullName} (${item.name.logogram})`}</span>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SelectCoin;