import React, { useState, useEffect } from "react";
import "./bloc_appartements.css";
import Appartement from "../components/Appartement";
import logement from "../logement.json";

function Appartements() {
  const [logements, setLogements] = useState([]);
  useEffect(fetchLogement, []);  

    function fetchLogement(){
    fetch("logement")
      .then((response) => response.json())
      .then((response) => setLogements(response))
      .catch(console.error);
      console.log(Appartements);
  }

  return (
    <div className="appartement__bloc">
    {logements.map((logement) => (
        <Appartement title={logement.title} imageURL={logement.cover} />
        
    ))}
    </div>
  );
}

export default Appartements;