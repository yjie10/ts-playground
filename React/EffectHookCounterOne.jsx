// useEffect Hook
import React, { useState, useEffect } from 'react';

// side effects (like fetching data), will need to make use of lifecycle methods such as componentDidMount / componentDidUpdate
// just like useState, useEffect is also a function

// useEffect runs after every render
// useEffect is placed inside the component

function EffectHookCounterOne() {

  const [count, setCount] = useState(0);

  // parameter: a function that gets executed after render of the component, 
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>

    </div>
  )
};

export default EffectHookCounterOne;