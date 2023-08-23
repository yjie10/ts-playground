// conditionally run effects

// useEffect is run after every render and therefore might cause a performance issue
// the way to do it in class component can refer to ClassCounterOne.jsx where can check in a if-statement block

import React, { useState, useEffect } from 'react';

function EffectHookCounterOneOne() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // parameter: a function that gets executed after render of the component, 
  // second is condition to run the effect (takes in an array to check if it has changed)
  useEffect(() => {
    console.log('useEffecr - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>

    </div>
  )
};

export default EffectHookCounterOneOne;