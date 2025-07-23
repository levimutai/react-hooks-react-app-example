import React from "react";
import { format } from "date-fns"; // this is fine to keep
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // ✅ Don't forget to import it!

function App() {
  return (
    <div className="App">
      <h1>Now</h1> 
      <ExampleComponent /> 
      <TestComponent /> 
    </div>
  );
}

export default App;
