import React, { useState, useEffect } from "react";
import "./bloc_appartements.css";
import Appartement from "../components/Appartement";
//import logement from "";

function Appartements() {
  const [logements, setLogements] = useState([]);
  useEffect(fetchLogement, []);  

    function fetchLogement(){
    fetch("logement.json")
      .then((response) => response.json())
      .then((response) => setLogements(response))
      .catch(console.error);
      //console.log(logement);
  }

  return (
    <div className="appartement__bloc">
    {logements.map((logement) => (
        <Appartement key={logement.id} title={logement.title} imageURL={logement.cover} />
        
    ))}
    <Appartement title="hello" imageURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"/>
    </div>
  );
}

export default Appartements;