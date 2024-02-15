import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
// if we want to increment by 3 - want to use arrow function instead of number
// when arrow func is called, will queue up updater function s
// pass arrow function to updater function - signal to react - dont change val of state now, but put func in queue