let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.done ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = task.text;
    span.onclick = () => toggleTask(index);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.onclick = () => deleteTask(index);

    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);
    list.appendChild(li);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text === '') return;

  tasks.push({ text, done: false });
  input.value = '';
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
