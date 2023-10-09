import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList}) {
  return (
    <div id="toy-collection">{toyList.map(toy => <ToyCard key={toy.name} name={toy.name} image={toy.image} likes={toy.likes} />)}</div>
  );
}

export default ToyContainer;
