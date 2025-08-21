import React, {useState} from "react";


function MyComponent() {
    const [name, setName] = useState("Boby");

    const UpdateName = () => {
        setName("BOB THE BUILDER");
    }

    const [age, setAge] = useState(0);

    const UpdateAge = () => {
        setAge(age + 30);
    }

    const [IsStudent, setIsStudent] = useState(false);

    const UpdateIsStudent = () => {
        setIsStudent(!IsStudent);
    }


    return(
        <>
        <p>{name}</p>
        <button onClick={UpdateName}>set name</button>
        <p>{age}</p>
        <button onClick={UpdateAge}>set age</button>
        <p>{IsStudent ? "Student" : "Not a Student"}</p>
        <button onClick={UpdateIsStudent}>set isStudent</button>
        </>
    )
}

export default MyComponent;
