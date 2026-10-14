const todolist = [{
    name: 'take classes',
    dueDate: '2026-6-9'
 }, {
    name: 'eat food',
    dueDate: '2026-6-9'
}
];
 

function renderTodoList(){

let todoListHTML = '';

for(let i=0;i<todolist.length;i++){
    const todoObject = todolist[i];
    // generating the html
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; // this takes name and dueDate property out of the object and puts it in a variable also called name and dueDate it's called DESTRUCTURING.
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todolist.splice(${i}, 1);
            renderTodoList();
            " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
}

document.querySelector(`.js-todo-list`).innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todolist.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate // these two lines will do the same thing as the above two lines, this method is known as shorthand property
        }
    );


    inputElement.value = '';

    renderTodoList();

}