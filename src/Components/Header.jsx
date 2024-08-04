import React from "react";



//You can clean this code up by using object destructuring and add more props:
function Header({ todaysDate, name }) {

    return (
        <header>
            <h1>{name}</h1>
            <h2>{todaysDate}</h2>
        </header>
    );
}


// function Header(props) {
//     console.log(props);
//   return (
//     <header>
//       <h1>{props.name}</h1>
//       <h2></h2>
//     </header>
//   );
// }

export default Header;

/*
To access the name key/property from App.jsx in `Header` component, add a parameter called `props` to the function.


*/