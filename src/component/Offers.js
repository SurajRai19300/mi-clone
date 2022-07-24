import React from 'react'
import Offe from "./Offe.js"
import "../styles/offers.css";

const Offers = ({Offer}) => {
    return (
        <div className="OfferSection">
            {Offer.map((item, index)=>(
                <Offe key={item.image} index = {index} src={item.image} link={item.url}/>

            ))}
            
        </div>
    )
}

export default Offers
