import React from "react";

const AboutUsCard = ({ imageLink, title, content }) => {
  return (
    <div
      className="card aboutUsCard mx-auto mb-5 p-4"
      style={{ width: "350px", borderRadius: "7px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
    >
      <div className="card-body">
        <img src={imageLink} alt="customer care" className="img-fluid mb-4" />
        <h4 className="bold">{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
