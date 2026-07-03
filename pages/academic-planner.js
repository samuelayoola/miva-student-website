/*==========================================
    ACADEMIC PLANNER
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const taskCount = document.getElementById("taskCount");

  // Display message when there are no tasks
  showEmptyMessage();

  /*==========================================
      ADD TASK
    ==========================================*/

  addTaskBtn.addEventListener("click", addTask);

  // Allow Enter key to add a task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");

      return;
    }

    removeEmptyMessage();

    // Create task item
    const task = document.createElement("li");
    task.className = "task";

    // Task text
    const text = document.createElement("span");
    text.textContent = taskText;

    // Button container
    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = "Complete";

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    // Complete task
    completeBtn.addEventListener("click", () => {
      task.classList.toggle("completed");

      if (task.classList.contains("completed")) {
        completeBtn.textContent = "Undo";
      } else {
        completeBtn.textContent = "Complete";
      }
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
      task.remove();

      updateTaskCount();

      showEmptyMessage();
    });

    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);

    task.appendChild(text);
    task.appendChild(buttons);

    taskList.appendChild(task);

    taskInput.value = "";

    taskInput.focus();

    updateTaskCount();
  }

  /*==========================================
      TASK COUNTER
    ==========================================*/

  function updateTaskCount() {
    const totalTasks = document.querySelectorAll(".task").length;

    taskCount.textContent = totalTasks;
  }

  /*==========================================
      EMPTY MESSAGE
    ==========================================*/

  function showEmptyMessage() {
    if (taskList.children.length === 0) {
      const empty = document.createElement("li");

      empty.className = "empty";

      empty.id = "emptyMessage";

      empty.textContent = "No tasks yet. Add your first academic task!";

      taskList.appendChild(empty);
    }
  }

  function removeEmptyMessage() {
    const empty = document.getElementById("emptyMessage");

    if (empty) {
      empty.remove();
    }
  }
});
