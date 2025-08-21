import React, {useState, useContext} from "react";
import { ColonyContext } from "./CompA";

function CompE(){

    const colony = useContext(ColonyContext);
    return(
        <div className="box">
            <h1>Component E</h1>
            <h1>{colony} Thanks you for visiting!</h1>
        </div>
    )
}

export default CompE;