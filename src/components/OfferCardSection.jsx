import React from "react";
import OfferCard from "./OfferCard";

const OfferCardSection = () => {
  return (
    <div className="d-sm-flex justify-content-sm-around offerCards" style={{backgroundColor:"#F4F4F4", paddingTop:"100px"}}>
      <OfferCard off="25%" code="dhrie254" className="br" imageLink={"https://res.cloudinary.com/dogmqg8to/image/upload/v1666659171/bus%20booking%20Web%20Application/jonathan-borba-LR5O79shvro-unsplash_znv7wn.jpg"} />
      <OfferCard off="20%" code="otwnp948" imageLink={"https://res.cloudinary.com/dogmqg8to/image/upload/v1666902849/bus%20booking%20Web%20Application/damian-kamp-isRd_ZCUyoA-unsplash_kn4vah.jpg"} />
      <OfferCard off="15%" code="uifog393" imageLink={"https://res.cloudinary.com/dogmqg8to/image/upload/v1666903092/bus%20booking%20Web%20Application/pradamas-gifarry-4rfo07r0MJo-unsplash_dssd0n.jpg"} />
    </div>
  );
};

export default OfferCardSection;
