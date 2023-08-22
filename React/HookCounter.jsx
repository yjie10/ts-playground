// useState Hook
import React, { useState } from 'react';


// 1 create a functional component
function HookCounter() {

  // 2 & 3, var and a method handling the var 
  const [count, setCount] = useState(0)
  // const [var, setVar] useState(var_initial_value)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter;
