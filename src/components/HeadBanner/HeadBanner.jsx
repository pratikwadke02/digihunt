import React from "react";
import { images } from "../../constants";

const HeadBanner = () => {
  return (
    <header>
      <img
        src={images.head_banner}
        alt='Digihunt Head Banner'
        style={{ width: "100%" }}
      />
    </header>
  );
};

export default HeadBanner;
