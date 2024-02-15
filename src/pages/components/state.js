import { useState } from 'react';
import { sculptureList } from '../../data/data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  // set index is updater function - react automatically creates def for it
    // component has JSX elements and associated state

  function handleClick() {
      if (index <= sculptureList.length - 1) {
          setIndex(index + 1);
      } else {
          setIndex(0);
      }
     // use updater function defined as part of state to update index with new value
      // done through set index to signal to react to re-render when it is called
  }

  let sculpture = sculptureList[index]; // load sculpture object
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
