import React from "react";

const Prop = (Props) => {   // you have pass para always
  // console.log(Prop);
  return (
    <div>
      <h1> Hello {Props.name} </h1>
      <p> {Props.children} </p>
    </div>
  );
};

export default Prop;

// try with obj
// this is stateless