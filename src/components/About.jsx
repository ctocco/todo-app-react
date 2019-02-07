import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="cart-title center">
          <h1 id="about-title">About</h1>
        </div>
        <div className="card-content center card-title">
          <p>
            This is a small project using React.js to make a simple to do list.
            This is also an experiment in routing and using techniques such as
            filter and map. I have also experimented with using the materialize
            library.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rainbow(About);
