import React from "react";
import "./Appartement.css"
function Appartement(props){
    return <div className="Appartement">
         <img src={props.imageURL} alt={props.title} />
        <div className="titre">{props.title}</div>
        </div>
}
export default Appartement;