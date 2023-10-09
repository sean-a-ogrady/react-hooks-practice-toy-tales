import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(setToyList)
  }, [])

  // Submit event in App
  // Handle the new toy control in App
  // Can pass the new toy into the 
  // Handle loading in database here or at ToyCard

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} />
    </>
  );
}

export default App;
