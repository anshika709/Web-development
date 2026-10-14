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

todolist.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todolist.splice(${index}, 1);
            renderTodoList();
            " class="delete-todo-button js-delete-todo-button">Delete</button>
    `; // we can't remove onclick from here cuz it's just string we are converting it into real html down by using dom.querySelector so we'll work there
    todoListHTML += html;
});



document.querySelector(`.js-todo-list`).innerHTML = todoListHTML;

//document.querySelector('js-delete-todo-button')//there's one more problem here querySelector works for only one button but we have multiple buttons to do that the document object has abother method document.querySelectorAll: this gives us all the element with the same class it makes a list and this will work as array so we can use forEach method to loop it

document.querySelectorAll('js-delete-todo-button').forEach( (deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        todolist.splice(index, 1);
        renderTodoList();
    });
});


}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
    addTodo();
});

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