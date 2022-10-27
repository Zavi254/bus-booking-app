import React from "react";
import OfferCard from "./OfferCard";

const OfferCardSection = () => {
  return (
    <div className="d-sm-flex justify-content-sm-around offerCards" style={{backgroundColor:"#F4F4F4", paddingTop:"100px"}}>
      <OfferCard imageLink={"https://res.cloudinary.com/dogmqg8to/image/upload/v1666659171/bus%20booking%20Web%20Application/jonathan-borba-LR5O79shvro-unsplash_znv7wn.jpg"} />
      <OfferCard imageLink={"https://res.cloudinary.com/dogmqg8to/image/upload/v1666659171/bus%20booking%20Web%20Application/jonathan-borba-LR5O79shvro-unsplash_znv7wn.jpg"} />
      <OfferCard imageLink={"https://res.cloudinary.com/dogmqg8to/image/upload/v1666659171/bus%20booking%20Web%20Application/jonathan-borba-LR5O79shvro-unsplash_znv7wn.jpg"} />
    </div>
  );
};

export default OfferCardSection;
