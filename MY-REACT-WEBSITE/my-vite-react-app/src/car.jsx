import React, {useState} from "react";


function FavouritCar() {
    const [car, setCar] = useState({name: "Tesla", year: 2025, model: "Model Y" });

    const handleNameChange = (event) => {
        setCar( c => ({...c,  name: event.target.value }))
    };

    const handleModelChange = (event) => {
        setCar(  c => ({...c, model: event.target.value}))
    };

    const handleYearChange = (event) => {
        setCar( c => ({...c,  year: event.target.value }))
    };

    return (
        <div>
        <div>
            <h1>My Favourite Car is: {car.name} {car.model} ({car.year})</h1>
        </div>
        <input type='text' value={car.name} onChange={handleNameChange} /> <br /> <br />
        <input type="text" value={car.model} onChange={handleModelChange} /> <br /> <br />
        <input type='number' value={car.year} onChange={handleYearChange} />
        </div>
    );
}

export default FavouritCar;