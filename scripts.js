function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');

        const listItem = document.createElement('li');
        listItem.innerText = taskText;

        const completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.className = 'complete';
        completeButton.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
