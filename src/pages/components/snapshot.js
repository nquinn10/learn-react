import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return ( // when on click happens makes call to set number 3 times
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
} // only see 1 number increment instead of 3
// when set number is invoked, it takes snapshot and then re-renders
// re-render doesnt happpen until onclick function complete
// takes snapshot at line 10, 11, 12 where number is 0
// once execution completes, increments by 1
