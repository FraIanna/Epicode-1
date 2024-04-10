const handleSubmit = function (e) {
    e.preventDefault();
    newTask();
    completedTask();
}

window.onload = function(){
    let form = document.querySelector("form")
    form.addEventListener("submit", handleSubmit)
}

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList")

const newTask = function() {
    let taskText = taskInput.value.trim();
    if (taskText !== ""){
        let li = document.createElement("li")
        li.innerHTML = taskText;
        taskList.appendChild(li);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("button2")
        deleteBtn.innerHTML = '<i class="fa-sharp fa-thin fa-trash-can"></i>';
        deleteBtn.addEventListener("click", function(){
            li.remove();
        })
        li.appendChild(deleteBtn)
    }
}

const completedTask = function (){
    let tasks = document.querySelectorAll("li");
    tasks.forEach((task) => {
        task.addEventListener("click", function(){
            task.classList.toggle("completed");
        })
    })
}
