import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([ // ensured updater function does not cause side effects
            ...artists,
            {id: nextId++, name: name}
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => ( // use map to construct list
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
