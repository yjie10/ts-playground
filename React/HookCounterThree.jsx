// useState with object
import React, { useState } from 'react';

function HookCounterThree() {

  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      {/* Below will result in, if one field gets updated, the other field gets removed from the state variable */}
      {/* useState does not automatically merge and update the object */}
      <input type="text" value={name.firstName} onChange={e => setName({ firstName: e.target.value })} />
      <input type="text" value={name.lastName} onChange={e => setName({ lastName: e.target.value })} />

      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>


      {/* have to do it manually unlike state, can be resolved using the spread operator */}
      <input
        type="text"
        value={name.firstName}
        // copy every property of name object and then just overwrite the firstName field
        onChange={e => setName({ ...name, firstName: e.target.value })} />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })} />

      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )



}

export default HookCounterThree;
