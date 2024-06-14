const todoList = [
  {
    name: "make dinner",
    dueDate: "2024-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2024-12-25",
  },
];

displayToDolist();

function displayToDolist() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `

        <div>
        ${name}
        </div>

        <div>
        ${dueDate}
        </div>

        <button onclick="
        todoList.splice(${i}, 1);
        displayToDolist();
        " class="delete-btn">Delete</button>

        `;
    todoListHTML += html;
  }
  document.getElementById("todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const todoNameInputElement = document.getElementById("todo-input");
  const todoDueDateInputElement = document.getElementById("todo-time");
  const name = todoNameInputElement.value;
  const dueDate = todoDueDateInputElement.value;
  if (name) {
    todoList.push({
      name,
      dueDate,
    });
    console.log(todoList);
    todoNameInputElement.value = "";
    todoDueDateInputElement.value = "";
    displayToDolist();
  }
}
