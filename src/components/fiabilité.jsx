import React from "react";
import "./DescriptionAbout.css"
/*import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fachevronup} from '@fortawesome/free-solid-svg-icons'*/
function Fiabilité(){
    return(
    <div className="bloc_description">
    <div className="TitleAbout">
        <h2>Fiabilité</h2>
        <i class="fa-sharp fa-solid fa-chevron-down ClickToShow"></i>
        <i class="fa-solid fa-chevron-up ClickToHide"></i>
       
    </div>
    <p className="description_content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
     </div>
 
    )
}
export default Fiabilité;