import React from "react";
const SingleServiceBenefit = ({ item }) => {
    return (
        <>
            <div className="service-item">
                <div className="img-wrap">
                    <img alt="" src={`image/${item.image} `} />
                </div>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
            </div>
        </>
    )
}
export default SingleServiceBenefit;