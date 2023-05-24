import React from 'react'

const SellerBox = ({bestSeller}) => {
    return (
        <div className="card">
            <img className="card-img-top" src="img/kyle.jpg" alt="Seller of the month"/>
            <div className="card-body">
            <h6 className="text-secondary">{bestSeller.name??''}</h6>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt amet, illo itaque similique repellat.
                content.
            </p>
            </div>
        </div>
    )
}

export default SellerBox
