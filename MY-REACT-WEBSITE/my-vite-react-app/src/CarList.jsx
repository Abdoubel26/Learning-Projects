import { useState } from 'react'

function CarList() {

    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();   

    function handleYearChange(e) {
        setYear(e.target.value);
    }
    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }
    function handleModelChange(e) {
        setCarModel(e.target.value);
    }

    function addCar() {
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars([...cars, newCar]);
        setYear(new Date().getFullYear())
        setCarMake('');
        setCarModel('');
    }

    function removeCar(index) {
        const updatedCars = cars.filter((_, i) => i !== index);
        setCars(updatedCars);
    }

    return(
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => removeCar(index)}> {car.make} {car.model} ({car.year})</li>
                ))}
            </ul>
            <input type="number" id="yearInput" value={carYear} onChange={handleYearChange}/>  <br /> <br />
            <input type="text" id="modelInput"  placeholder='enter the Model' value={carModel} onChange={handleModelChange}></input> <br /> <br />
            <input type="text" id="makeInput" placeholder='enter the Make' value={carMake} onChange={handleMakeChange} /><br /> <br />
            <button onClick={addCar} >add Car</button>
        </div>
    );
}

export default CarList;
