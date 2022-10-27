import React from "react";
import { images } from "../../constants";

const HeadBanner = () => {
  return (
    <>
      <img
        src={images.head_banner}
        alt='Digihunt Head Banner'
        style={{ width: "100%" }}
      />
    </>
  );
};

export default HeadBanner;
