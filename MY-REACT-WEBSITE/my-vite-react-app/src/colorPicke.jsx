import React, {useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    const UpdateColor = (e) =>  {
        setColor(e.target.value);
    }

    return (
        <>
        <div className="wrapper">
        <div style={{ backgroundColor: color }} className="color-picker-container">
            <p>Selected Color: {color}</p>
        </div>
        <input type="color" value={color} onChange={UpdateColor} className="color-input"></input>
        </div>
    </>
    );

}

export default ColorPicker;
