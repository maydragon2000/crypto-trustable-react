import React, { useEffect, useState } from "react";
import "./style.css"
import SearchDropdown from "../searchDropdown/SearchDropdown";
const SelectCoin = ({ marketData, label, placeholder, initialId }) => {
    let selectList = [];
    useEffect(() => {
        marketData.map((item, index) => {
            selectList.push({ value: index + 1, label: item.name.logogram, image: item.id })
        })
    })
    const [coinValue, setCoinValue] = useState(undefined);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="coin-selection-wrap">
                <div className="input-wrap">
                    <p>{label}</p>
                    <input type="text" placeholder={placeholder} />
                </div>
                <div className="select-wrap">
                    <SearchDropdown isOpen={isOpen} setIsOpen={setIsOpen} image={marketData[initialId].id} type="coin" name={marketData[initialId].name.logogram} options={selectList} value={coinValue} setValue={setCoinValue} />
                </div>
            </section>
        </>
    )
}
export default SelectCoin;