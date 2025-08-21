import React, {useState, createContext} from "react";
import CompB from './CompB.jsx'




function CompA(){

    const [colony, setColony] = useState('Hellas Nova')

    return(
        <div className='box'>
            <h1>component A</h1>
            <h1>Welcome to {colony}</h1>
            <ColonyContext.Provider value={colony}>
             <CompB />
            </ColonyContext.Provider>
        </div>
    )
}
    export const ColonyContext = createContext('Hellas Nova');
export default CompA;