import React, {use, useState} from "react";
import './todolist.css';




function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState();

    function addTodos() {
        let Updatedtodos = {name: todo};
        setTodos([...todos, Updatedtodos])
        setTodo('')
    }

    function removeTodos(index) {
        const Newremovedtodos = todos.filter((_, i) => i !== index);
        setTodos(Newremovedtodos);
    }

    
    function UpdateTodo(e) {
        setTodo(e.target.value);
    }

    function moveTodoUp(index){
        if (index === 0) return;
        const updatedtodosMovingUp = [...todos];
        [updatedtodosMovingUp[index], updatedtodosMovingUp[index - 1]] = 
        [updatedtodosMovingUp[index - 1], updatedtodosMovingUp[index]];
        setTodos(updatedtodosMovingUp);
    }

        function moveTodoDown(index){
        if (index === todos.length - 1) return;
        const updatedtodosMovingUp = [...todos];
                [updatedtodosMovingUp[index], updatedtodosMovingUp[index + 1]] = 
        [updatedtodosMovingUp[index + 1], updatedtodosMovingUp[index]];
        setTodos(updatedtodosMovingUp);
    }


    return(
        <>
        <head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </head>
        <div>
            <h1>To-Do App</h1>
            <input id="todoInput" type="text" value={todo} onChange={UpdateTodo}  placeholder="add todos here" className='whateverItIs'/><button className="submitbtn" onClick={addTodos}>Add todo</button>
            <ul>
                {todos.map((Stodo, index) => (
                   <div className="todoDiv">
                    <input className='RCB' type="checkbox"></input>
                    <i class="material-icons check" id="CCB1">check</i>
                     <li  key={index}>{Stodo.name}</li>
                     <button onClick={() => removeTodos(index)} id='deletebtn'>Delete</button>
                    <button className='UDB' onClick={() => moveTodoUp(index)}>⬆️</button>
                    <button className='UDB'  onClick={() => moveTodoDown(index)}>⬇️</button>
                    </div>
                )
                )}
            </ul>
        </div>
        </>
    )
}

export default TodoList;