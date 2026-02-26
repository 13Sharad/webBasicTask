var todos = [];
var form = document.getElementById("form");
var input = document.getElementById("inputValue");
var listItems = document.getElementById("items");
if (!form || !input || !listItems) {
    throw new Error("DOM elements not found");
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = input.value.trim();
    if (value === "")
        return;
    var newTask = {
        id: Date.now().toString(),
        task: value,
    };
    todos.push(newTask);
    input.value = "";
    render();
});
function deleteTask(id) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
    render();
}
function editBtn(id) {
    todos.forEach(function (todo) { return delete todo.isEditing; });
    var t = todos.find(function (todo) { return todo.id === id; });
    if (!t)
        return;
    t.isEditing = true;
    render();
}
function render() {
    if (!listItems)
        return;
    listItems.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        if (todo.isEditing) {
            var inputEdit_1 = document.createElement("input");
            inputEdit_1.type = "text";
            inputEdit_1.value = todo.task;
            inputEdit_1.className = "edit-input";
            var saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.className = "save-btn";
            var cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.className = "cancel-btn";
            var save_1 = function () {
                var newValue = inputEdit_1.value.trim();
                if (newValue === "")
                    return;
                todo.task = newValue;
                delete todo.isEditing;
                render();
            };
            var cancel_1 = function () {
                delete todo.isEditing;
                render();
            };
            inputEdit_1.addEventListener("keydown", function (e) {
                if (e.key === "Enter")
                    save_1();
                if (e.key === "Escape")
                    cancel_1();
            });
            saveBtn.addEventListener("click", save_1);
            cancelBtn.addEventListener("click", cancel_1);
            li.appendChild(inputEdit_1);
            li.appendChild(saveBtn);
            li.appendChild(cancelBtn);
            setTimeout(function () { return inputEdit_1.focus(); }, 0);
        }
        else {
            var span = document.createElement("span");
            span.textContent = todo.task;
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            var editbtn = document.createElement("button");
            editbtn.textContent = "Edit";
            editbtn.className = "edit-btn";
            editbtn.addEventListener("click", function () {
                editBtn(todo.id);
            });
            deleteBtn.addEventListener("click", function () {
                deleteTask(todo.id);
            });
            li.appendChild(span);
            li.appendChild(deleteBtn);
            li.appendChild(editbtn);
        }
        listItems.appendChild(li);
    });
}
