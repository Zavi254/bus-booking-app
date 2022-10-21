import React from "react";

const Button = ({ text, classN, onClick }) => {



  return <button onClick={onClick} className={classN}>{text}</button>;
};

export default Button;
