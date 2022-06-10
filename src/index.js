// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Defining a function for JSX usage of JS variable
// function getButtonText(){
//     return 'Click me';
// }

// Creating react component
const App = () => {
  
  const buttonText = { text : 'Click'};  
    
  return (
    <div>
    <label className="label" htmlFor="name">Enter Name</label>
    <input type="text" id="name"></input>
    <button style={{ backgroundColor : 'red' }}>
        {buttonText.text}
    </button>
  </div>
  );
};

//Render component through JSX
ReactDOM.render(<App />, document.querySelector("#root"));
