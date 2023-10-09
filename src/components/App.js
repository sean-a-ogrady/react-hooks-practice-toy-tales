import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);
  const [newToy, setNewToy] = useState({name: "", image: "", likes: 0})

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onNewToySubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/toys", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newToy.name,
        image: newToy.image,
        likes: newToy.likes
      })
    })
    .then(response => response.json())
    .then(data => {
      setToyList([...toyList, data]);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function deleteToy(id) {
    fetch("http://localhost:3001/toys/" + id, {method: "DELETE"})
    .then(response => response.json())
    .then(setToyList(prevList => prevList.filter(toy => toy.id !== id)))
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(setToyList)
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm newToy={newToy} setNewToy={setNewToy} onNewToySubmit={onNewToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick} >Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} deleteToy={deleteToy} />
    </>
  );
}

export default App;
