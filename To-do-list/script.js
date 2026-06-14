const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    //Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.classList.add('complete');

    completeBtn.addEventListener("click", () => {
        completeBtn.textContent = "✔";
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    const div = document.createElement('div');
    div.classList.add('buttons');
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(div);

    taskList.appendChild(li);

    taskInput.value = "";
}