import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUsSection = () => {
  const content =
    "We give you the wildest number of travel options across thousands of routes.";
  return (
    <div className="aboutUs" style={{ paddingTop: "50px" }}>
      <h2 className="text-center">You can build easily</h2>
      <p className="text-center">
        We give you the wildest number of travel options across thousands of
        routes. We give you the widest number of travel options across thousands
        of routes
      </p>
      <div className="d-sm-flex mt-5">
        <AboutUsCard
          title="Best Customer Support"
          content={content}
          imageLink={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1666661208/bus%20booking%20Web%20Application/13184991_5138237_cdrna3.jpg"
          }
        />
        <AboutUsCard
          title="Verified Drivers and Vehicles"
          content={content}
          imageLink={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1666661208/bus%20booking%20Web%20Application/13994210_5405632_sbst8j.jpg"
          }
        />
        <AboutUsCard
          title="Live Track Your Journey"
          content={content}
          imageLink={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1666903966/bus%20booking%20Web%20Application/11667582_20945440_caimcq.jpg"
          }
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
