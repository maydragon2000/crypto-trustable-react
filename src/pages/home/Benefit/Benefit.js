import React from "react";
import "./style.css"
import SingleServiceBenefit from "../../../component/SingleServiceBenefit/SingleServiceBenefit";
const Benefit = () => {
    const services = [{
        image: "SaftyCome.svg",
        name: "Safty Comes First",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    {
        image: "EasyDeposit.svg",
        name: "Easy Deposit & Withdrawls",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    {
        image: "LowCharge.svg",
        name: "Low Charges",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    {
        image: "Bonus.svg",
        name: "Bonus & Refferal",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    {
        image: "FastTransaction.svg",
        name: "Fast Transactions",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    {
        image: "DeepEncryption.svg",
        name: "Deep Encryption ",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    {
        image: "FastKYC.svg",
        name: "Fast KYC",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    {
        image: "benefit-support.svg",
        name: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."
    },
    ]
    return (
        <>
            <div className="benefit">
                <p className="title">Benefits</p>
                <h1>Our Best Service</h1>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                <div className="services">
                    {
                        services.map((item, index) => <SingleServiceBenefit item={item} key={index} />)
                    }
                </div>
            </div>
        </>
    )
}
export default Benefit;