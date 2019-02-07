import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        corrupti sapiente distinctio voluptates omnis minima est quidem iure
        soluta nobis!
      </p>
    </div>
  );
};

export default Rainbow(About);
