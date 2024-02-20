import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  // city need to change, but original object needs to stay read only
    // create shallow copy and update elements within shallow copy
  function handleCityChange(e) { //make sure original object stays same  - read only
    const nextArtwork = { ...person.artwork, city: e.target.value }; // spread syntax creates shallow copy
    const nextPerson = { ...person, artwork: nextArtwork }; // use spread syntax to make copy of change
    setPerson(nextPerson);
  }


  return ( // when city changes, calls handleCityChange function
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
