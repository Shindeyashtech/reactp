import React from "react";
import { useState } from 'react'
 function CounterHooks() {
    const [count,setCount]=useState(0)
    return(
        <div>  
<button type="button " onClick={()=>setCount(count+1)} > Increment {count} </button>
        </div>
    ) 
}
export default CounterHooks