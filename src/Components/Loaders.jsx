import React from "react";
import { Triangle } from 'react-loader-spinner'

function Loaders() {
  return (
    <div className="loader-box">
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="black"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loaders;
