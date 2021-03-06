import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2066.987306286005!2d2.3913181703401523!3d48.86111663499619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d8b5c69a785%3A0xa1cf6127530b6419!2sP%C3%A8re+Lachaise+Cemetery!5e1!3m2!1sen!2sus!4v1532570978843"
        title="map"
        width="100%"
        height="500px"
        frameBorder="0"
      />
      <div className="location_tag">Location</div>
    </div>
  );
};

export default Location;
