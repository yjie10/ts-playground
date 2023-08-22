// useState with previous state
import React, { useState } from 'react';


function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>

      {/* not the right way to do it */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}

      {/* safer way to do it, useState with previous state */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>



    </div>
  )
}

export default HookCounterTwo;
