import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Proper from "./assets/compo/Proper";
// import Prop from "./assets/compo/propp";
function App() {
      return (
    <div className="App">
      <Proper name="Yash">
        <input type="button" value="click" />
      </Proper>
      <Proper name="raj"></Proper>
      <Proper name="sid"></Proper>

      {/* //   <Prop name="yash">
    //     <p>Vijay is yash </p>
    //   </Prop>
    //   <Prop name="ya">
    //    <a href="https://www.youtube.com/"><button type="button">submit</button></a> 
    //   </Prop>
    //   <Prop name="yh">
    //      <input type="datetime-local" name="" id="" />
    //   </Prop> */}
    </div>
  );
}

export default App;
