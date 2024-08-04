import "./App.css";
import dogs from "./data.js";
import React from "react";
import Aside from "./Components/Aside";
import Header from "./Components/Header";
import Main from "./Components/Main";

const todaysDate = new Date().toDateString();
const dayCareName = "Bark and Bowl Doggy Day Care";

function App() {
  return (
    <div className="App">
      <Header todaysDate={todaysDate} name={dayCareName} />
      <Aside dogs={dogs} />
      <Main dogs={dogs} />
    </div>
  );
}

export default App;

/*

//<Header todaysDate={todaysDate} name={dayCareName} />
//`todaysDate` is the key/prop name and {todaysDate} is the value.
//'name` is the key/prop and {dayCareName} is the value.


*/