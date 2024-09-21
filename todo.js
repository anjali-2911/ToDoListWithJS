let todoList = [{item: 'buy botttle', dueDate: '10-02-2024'}, {item: 'do cleaning', dueDate:'20-02-2024'}];
displayItem();

function addtodo (){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem, dueDate:todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItem();
}

function displayItem() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i=0;  i<todoList.length; i++)
    {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        //we distruct this code in below lines;

        let {item, dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span><span>${dueDate}</span>
        <button id="btn-delete" onclick="todoList.splice(${i}, 1); displayItem();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}