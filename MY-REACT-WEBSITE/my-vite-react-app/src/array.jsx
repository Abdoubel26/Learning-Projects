import React, {useState} from "react";

function MyFunction() {
    const [foods, setFoods] = useState(['pizza', 'Sushi', 'Banana'])


    const addFoods = (e) => {
        const newFood = document.getElementById('AA1').value;
        document.getElementById('AA1').value = '';
        setFoods(f => [...foods, newFood]);
    }

    const removeFood = (index) => {
        foods.splice(index, 1);
        setFoods([...foods]);
    }

    return(
        <div>
            <h1>Food List</h1>
            <ul>
                {foods.map((food, index) => (<li key={index} onClick={() => removeFood(index)}>{food}</li>))}                    
            </ul>
            <input type="text" id='AA1' placeholder="Enter Food here!" />
            <button onClick={addFoods}>Add food</button>
            <button onClick={() => setFoods([])}>Clear List</button>
        </div>
    )


}

export default MyFunction;