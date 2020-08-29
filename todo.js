var state = {
  inputValue: "",
  tasks: [],
};
var id = 0;
var liId = "";
const handleInputChange = () => {
  const input = document.getElementById("input");
  input.value.trim !== "" ? (state.inputValue = input.value) : null;
};

const addTask = () => {
  state.tasks = [...state.tasks, { id: id++, data: state.inputValue }];
  let length = state.tasks.length;
  const ul = document.getElementById("tasklist");
  let li = document.createElement("li");
  li.setAttribute("id", state.tasks[length - 1].id);
  li.addEventListener("click", function (e) {
    liId = e.target.id;
  });
  li.innerHTML = state.tasks[length - 1].data;
  ul.appendChild(li);
};

function removeTask() {
  if (liId) {
    var taskLeft = state.tasks.filter((task) => task.id != liId);
    var taskCompleted = state.tasks.filter((task) => task.id == liId);
    state.tasks = [...taskLeft];
    state.completedTasks = [...taskCompleted];
    var li = document.getElementById(liId);
    if (li) {
      var ul = document.getElementById("tasklist");
      ul.removeChild(li);
    }
  }
}
