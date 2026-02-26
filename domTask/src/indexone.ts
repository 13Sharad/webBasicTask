interface TODO{
    id:string;
    task: string;
    isEditing?: boolean;

}


let todos:TODO[] = [];

let form = document.getElementById("form") as HTMLFormElement | null;
let input = document.getElementById("inputValue") as HTMLInputElement | null;
let listItems = document.getElementById("items") as HTMLUListElement | null;

if (!form || !input || !listItems) {
  throw new Error("DOM elements not found");
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let value = input.value.trim();

    if(value === "") return;
    
    let newTask:TODO = {
        id: Date.now().toString(), 
        task: value,
    };

    todos.push(newTask);
    input.value = "";
    render();
});

function deleteTask(id:string){
    todos = todos.filter(todo => todo.id !== id);
    render();
}
function editBtn(id: string) {
    todos.forEach(todo => delete todo.isEditing); 
    const t = todos.find(todo => todo.id === id);
    if (!t) return;
    t.isEditing = true;
    render();
}

function render() {
    if (!listItems) return;
    listItems.innerHTML = "";

    todos.forEach((todo) => {
        let li = document.createElement("li");

        if (todo.isEditing) {
            const inputEdit = document.createElement("input") as HTMLInputElement;
            inputEdit.type = "text";
            inputEdit.value = todo.task;
            inputEdit.className = "edit-input";

            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.className = "save-btn";

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.className = "cancel-btn";

            const save = () => {
                const newValue = inputEdit.value.trim();
                if (newValue === "") return;
                todo.task = newValue;
                delete todo.isEditing;
                render();
            };

            const cancel = () => {
                delete todo.isEditing;
                render();
            };

            inputEdit.addEventListener("keydown", (e) => {
                if (e.key === "Enter") save();
                if (e.key === "Escape") cancel();
            });

            saveBtn.addEventListener("click", save);
            cancelBtn.addEventListener("click", cancel);

            li.appendChild(inputEdit);
            li.appendChild(saveBtn);
            li.appendChild(cancelBtn);

            setTimeout(() => inputEdit.focus(), 0);
        } else {
            let span = document.createElement("span");
            span.textContent = todo.task;

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";

            let editbtn = document.createElement("button");
            editbtn.textContent = "Edit";
            editbtn.className = "edit-btn";

            editbtn.addEventListener("click",()=>{
                editBtn(todo.id);
            });

            deleteBtn.addEventListener("click", () => {
                deleteTask(todo.id);
            });

            li.appendChild(span);
            li.appendChild(deleteBtn);
            li.appendChild(editbtn);
        }

        listItems.appendChild(li);
    });
}
