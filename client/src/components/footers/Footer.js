import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="wipro logo"
            src={process.env.PUBLIC_URL + "/images/wipro.jpg"}
          />
        </div>
        <div className="card-name">
          <img
            alt="Great Learning"
            src={process.env.PUBLIC_URL + "/images/Great_Learning.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
