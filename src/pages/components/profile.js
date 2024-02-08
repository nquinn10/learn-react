// component name needs capital letter when imported
// component is function that must be exported - contains HTML like structure
export default function Profile() { // main component must be exported
  return (<img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />) // return statement in parentheses - not mandatory, but should if we return more than one element
} // component must return something - must be HTML like structure