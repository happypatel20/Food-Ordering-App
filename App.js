import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

// component 1. class component  and 2. functional component -> A js function that returns a jsx or react element that is called functional compoenent
//  jsx -> createElement -> object -> HTML tag [babel]

// Rules of JSX:
// - can have only single root [react Fragment-]
// - closing the tag is must 
// - having camelCase in most cases 

const Title = () => {
  return <p>Hey this is from title component</p>
}
const person = {
  "name": "Happy",
  "theme": {
    "backgroundColor": "blue",
    "color": "white"
  }
}
const Heading = () => {
 return ( 
  <>
    <h1 style={person.theme}>Hello {person.name} from functional component</h1>
    <Title />
  </>
) 
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
