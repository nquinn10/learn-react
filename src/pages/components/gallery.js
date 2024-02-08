import Profile from './profile.js'
// create Gallery component - returns custom tag Profile that was just created
export default function Gallery() {
  return (
    <div>
      <h1>Profiles: </h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}
