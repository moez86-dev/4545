function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value === '') {
        alert('يرجى إدخال مهمة.');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'حذف';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = '';
}
