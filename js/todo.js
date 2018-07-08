let TODOS = [];

function update() {
  const $todoList = document.querySelector(".todo-list");
  $todoList.innerHTML = "";
  for (const item of TODOS) {
    const $li = document.createElement("li");
    if (item.done) {
      $li.classList.add("completed");
    }
    $todoList.appendChild($li);

    // Toggle button
    const $toggle = document.createElement("input");
    $toggle.className = "toggle";
    $toggle.setAttribute("type", "checkbox");
    if (item.done) {
      $toggle.setAttribute("checked", "checked");
    }
    $toggle.addEventListener("change", onToggleTodo.bind(null, item.id));
    $li.appendChild($toggle);

    // Label
    const $label = document.createElement("label");
    $label.innerHTML = item.title;
    $li.appendChild($label);

    // Delete button
    const $button = document.createElement("button");
    $button.className = "destroy";
    $li.appendChild($button);
  }
  document.querySelector(".main").style.display = "block";
}

function onToggleTodo(id) {
  const todo = TODOS.find(todo => todo.id === id);
  // TODOS.find(function(todo) { return todo.id === id; });
  todo.done = !todo.done;
  update();
}

function onNewTodo(e) {
  const title = e.target.value;
  // Same as this line:
  //const title = document.querySelector(".new-todo").value;
  console.log(title);
  TODOS.push({
    id: Date.now(),
    title,
    done: false
  });
  update();
  e.target.value = "";
}

// Select the new todo input field.
const $newTodo = document.querySelector(".new-todo");
$newTodo.addEventListener("change", onNewTodo);
