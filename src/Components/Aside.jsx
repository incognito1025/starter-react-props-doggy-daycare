import React from "react";

//How can we get a list of each dog's name as a list item?
//We can loop over the data and then add `li` elements around each dog name:


//Pass Dogs props to component Aside:

function Aside( { dogs } ) {
  console.log(dogs);

  //To find each list of element in the array:
  // const dogListItems = [];
  // for (let i = 0; i < dogs.length; dog++) {
  //   dogListItems.push(`<li>${dogs[i].name}<li>`);
  // }

  return (
    <aside>
      <h3>Roster:</h3>
      <ol>{dogs.map((dog) => (dog.present ? <li key={dog.name}>{dog.name}</li> : null))}</ol>
    </aside>
  );
}

//key={dog.name}: The key attribute is used by React to uniquely identify each list item. In this case, it uses the dog's name as the key. Note: Ideally, key should be a unique identifier; using names might not be ideal if names are not unique.

export default Aside;


/*

import React from 'react';

const DogList = ({ dogs }) => {
  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.id}>{dog.name}</li>
      ))}
    </ul>
  );
};

export default DogList;

      <ol>{dogs.map((dog) => (<li>{dog.name}</li>) //This is an arrow function used as a callback for the .map() method. For each `dog` object in the array, this function returns a new <li> element with the dog's name (`dog.name`).
    )}

//In React, if you don't want to return an element, you must return null. 

if the element (dog) in the array of objects (dogs) is present/true (property/key) then return a list with dog else return null:

  if (dog.present) {
    return <li>{dog}</li>;
  } else {
    return null;
  }

  to 

  if dog.present is true then return dog's name otherwise return null.
  //Javascript: return dog.present ? dog.name : null;

React:
  // return dog.present ? <li>{dog}</li> : null;
If dog.present is true, then return the first value after the question mark. Else return the value after the colon.

<ol>{dogs.map((dog) => (dog.present ? <li>{dog.name}</li> : null))}</ol>

*/