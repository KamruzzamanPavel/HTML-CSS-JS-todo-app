// const input_todo = document.getElementById("input_todo");
// const todos = document.querySelector("#todos");
// //
// function ad_todo() {
//   if (input_todo.value === "") alert("Input ur  shit 1st , then click add");
//   else {
//     var pp = document.createElement("div");
//     pp.className = "todo_holder";
//     var p = document.createElement("p");
//     p.innerHTML = input_todo.value;

//     let delbtn = document.createElement("span");
//     delbtn.id = "dlbtn";
//     delbtn.innerHTML = "&times;";
//     pp.className = "todo_holder";
//     pp.appendChild(p);
//     pp.appendChild(delbtn);
//     p.onclick = () => {
//       p.className = "checked";
//       save_data();
//       show_todo();
//     };

//     delbtn.onclick = () => {
//       pp.remove();
//       save_data();
//       show_todo();
//     };

//     todos.appendChild(pp);
//   }
//   input_todo.value = "";
//   save_data();
// }
// //
// function save_data() {
//   localStorage.setItem("data", todos.innerHTML);
// }
// function show_todo() {
//   todos.innerHTML = localStorage.getItem("data");
// }

// function dlt_all() {
//   localStorage.removeItem("data");
//   location.reload();
// }
// show_todo();
const inputTodo = document.getElementById("input_todo");
const todos = document.querySelector("#todos");

let todoHistory = [];

function add_todo() {
  if (inputTodo.value === "") {
    alert("Please enter a task before adding.");
  } else {
    const todoHolder = document.createElement("div");
    todoHolder.className = "todo_holder";

    const todoText = document.createElement("p");
    todoText.textContent = inputTodo.value;

    const deleteBtn = document.createElement("span");
    deleteBtn.id = "dlbtn";
    deleteBtn.innerHTML = "&times;";

    const editBtn = document.createElement("span");
    editBtn.className = "editbtn";
    editBtn.innerHTML = "Edit";

    const toggleBtn = document.createElement("span");
    toggleBtn.className = "togglebtn";
    toggleBtn.innerHTML = "Toggle";

    todoHolder.appendChild(todoText);
    todoHolder.appendChild(editBtn);
    todoHolder.appendChild(toggleBtn);
    todoHolder.appendChild(deleteBtn);

    todoText.onclick = () => {
      todoText.classList.toggle("checked");
      save_data();
    };

    editBtn.onclick = () => {
      const newText = prompt("Edit your task:", todoText.textContent);
      if (newText) {
        todoText.textContent = newText;
        save_data();
      }
    };

    toggleBtn.onclick = () => {
      todoText.classList.toggle("checked");
      save_data();
    };

    deleteBtn.onclick = () => {
      todoHolder.remove();
      save_data();
    };

    todos.appendChild(todoHolder);
    inputTodo.value = "";
    save_data();
  }
}

function save_data() {
  todoHistory.push(todos.innerHTML);
  localStorage.setItem("data", todos.innerHTML);
}

function show_todo() {
  todos.innerHTML = localStorage.getItem("data") || "";
}

function delete_all() {
  localStorage.removeItem("data");
  location.reload();
}

function undo() {
  if (todoHistory.length > 0) {
    todoHistory.pop();
    todos.innerHTML = todoHistory[todoHistory.length - 1] || "";
    localStorage.setItem("data", todos.innerHTML);
  }
}

show_todo();
