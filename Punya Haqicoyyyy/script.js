let taskToEdit = null;

function addOrEditTask() {
  const input = document.getElementById('tf-input').value;
  if (input.trim() === '') return;
  if (taskToEdit) {
    taskToEdit.firstChild.textContent = input;
    taskToEdit = null;
    document.getElementById('edit').textContent = 'Add Task';
    document.getElementById('tf-input').placeholder = "Enter a task";

  } else {
    const task = document.createElement('li');
    task.textContent = input;
    task.id =
      new Date().valueOf().toString() +
      Math.random().toString(36).substring(2, 7);
    task.classList.add('list-item');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
      editTask(task.id);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      deleteTask(task.id);
    });
    task.appendChild(editButton);
    task.appendChild(deleteButton);
    document.getElementById('task-container').appendChild(task);
  }
  document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function editTask(id) {
  const task = document.getElementById(id);
  const taskText = task.firstChild.textContent.trim();
  document.getElementById('tf-input').value = taskText;
  taskToEdit = task;
  document.getElementById('tf-input').placeholder = "Edit a task"
  document.getElementById('edit').textContent = 'Edit';
}
