import React from "react";
import { useState } from "react";
function CounterHooksTwo() {
  const InitialCount = 0;
  const [count, setCount] = useState(InitialCount);

  
  function IncrementByFive() {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount+1);
    }
  }

  function DecrementByFive() {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount-1);
    }
  }

  return (
    <div>
      <button type="button " onClick={() => setCount(prevCount => prevCount+1)}>
        {" "}
        Increment {count}{" "}
      </button>
      <button type="button " onClick={() => setCount(prevCount => prevCount-1)}>
        {" "}
        Decrement {count}{" "}
      </button>
      <button type="button " onClick={IncrementByFive}>
        {" "}
        IncrementByFive {count}{" "}
      </button>
      <button type="button " onClick={DecrementByFive}>
        {" "}
        DecrementByFive {count}{" "}
      </button>


      <button type="button " onClick={() => setCount(InitialCount)}>
        {" "}
        Reset {count}{" "}
      </button>
    </div>
  );
}
export default CounterHooksTwo;
