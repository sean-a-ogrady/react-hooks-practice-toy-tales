import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, deleteToy, likeToy }) {
  return (
    <div id="toy-collection">{toyList.map(toy =>
      <ToyCard 
      key={toy.id}
       id={toy.id} 
       name={toy.name} 
       image={toy.image} 
       likes={toy.likes} 
       deleteToy={deleteToy} 
       likeToy={likeToy}
       />)}</div>
  );
}

export default ToyContainer;
