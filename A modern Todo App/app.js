const input = document.getElementById('todoinput');
const submitbtn = document.getElementById('submitbtn');
const form = document.getElementById('myform');
const wrapper = document.querySelector('wrapper');


let alltodos = gettodos();
displaytodos();

form.addEventListener('submit', (event) => {
    
    event.preventDefault()
    let text = addtodo();
    if(text){
        displaytodos(text);
    }
    
}) 

function addtodo() {
    const todoText = input.value.trim();
    if(todoText.length >= 1) {
        alltodos.push(todoText); 
        console.log(alltodos);
        input.value = "";
        savetodos();
        return todoText;
}
}
function displaytodos() {
  const ul = document.getElementById('todolist');
  ul.innerHTML = "";                // wipe out everything inside <ul>
  
  alltodos.forEach((element, index) => {
    const todo = document.createElement("li");
    todo.classList.add('todo');

    
    // 1. Checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('RCB');
    checkbox.setAttribute('id', `todo${index}`);
    checkbox.setAttribute('type', 'checkbox');

    // 2. Check icon
    const graphic = document.createElement('i');
    graphic.classList.add('material-icons', 'check');
    graphic.textContent = 'check';

    // 3. Label
    const label = document.createElement('label');
    label.classList.add('todotext');
    label.setAttribute('for', `todo${index}`);
    label.textContent = element;   
        
    const deletebtn = document.createElement('button');
    deletebtn.classList.add('deletebtn');
    const Deletegraphic = document.createElement('i');
    Deletegraphic.classList.add('material-icons');
    Deletegraphic.textContent = 'delete';


    ul.appendChild(todo);
    todo.appendChild(checkbox);
    todo.appendChild(graphic);
    todo.appendChild(label);
    todo.appendChild(deletebtn);
    deletebtn.appendChild(Deletegraphic);

    // 4. Delete button
    
      deletebtn.addEventListener('click', () => { removetodo(index); 

  });


  });
}



function removetodo(index) {
    alltodos.splice(index, 1);
    savetodos();
    displaytodos();
}


function savetodos() {
    const todoJson = JSON.stringify(alltodos);
    localStorage.setItem("todos", todoJson);
}




function gettodos(){
    const todoJson = localStorage.getItem("todos");
    const todoParsed = JSON.parse(todoJson) || "[]";
    return todoParsed;
}


function updatetodList() {

}

