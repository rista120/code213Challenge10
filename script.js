//elements

const btnWhenActive = `<div class="buttons">
<button type="button" class="btn-remove">Remove</button>
<button type="button" class="btn-done">Done</button>
</div>`;

const input = document.getElementById("input");
const btnAdd = document.getElementById("btn-add");

const tasksDisplay = document.getElementById("tasks-display");
const activeList = document.getElementById("activeList");
const doneList = document.getElementById("doneList");

//Code
btnAdd.addEventListener("click", () => {
  if (input.value.trim() === "") {
    input.value = "";
  } else {
    const newLi = document.createElement("li");
    activeList.prepend(newLi);
    newLi.innerHTML = btnWhenActive;
    const newTask = document.createElement("p");
    newTask.innerText = input.value;
    newLi.prepend(newTask);
    input.value = "";
    saveData();
  }
});

activeList.addEventListener("click", function (e) {
  if (e.target.className === "btn-remove") {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.className === "btn-done") {
    e.target.className = "btn-activate";
    e.target.innerText = "Activate";
    doneList.prepend(e.target.parentElement.parentElement);
    saveData();
  }
});

doneList.addEventListener("click", function (e) {
  if (e.target.className === "btn-remove") {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.className === "btn-activate") {
    activeList.prepend(e.target.parentElement.parentElement);
    e.target.className = "btn-done";
    e.target.innerText = "Done";
    saveData();
  }
});

//Store Data
function saveData() {
  localStorage.setItem("activeData", activeList.innerHTML);
  localStorage.setItem("doneData", doneList.innerHTML);
}

function showData() {
  activeList.innerHTML = localStorage.getItem("activeData");
  doneList.innerHTML = localStorage.getItem("doneData");
}

showData();
