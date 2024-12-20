    // Manipulação do menu
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');

    openMenu.addEventListener('click', () => {
        menu.style.display = "flex";
        menu.style.right = (menu.offsetWidth * -1) + 'px';
        setTimeout(() => {
            menu.style.opacity = '1';
            menu.style.right = "0";
            openMenu.style.display = 'none';
        }, 10);
    });

    closeMenu.addEventListener('click', () => {
        menu.style.opacity = '0';
        menu.style.right = (menu.offsetWidth * -1) + 'px';
        setTimeout(() => {
            menu.removeAttribute('style');
            openMenu.removeAttribute('style');
        }, 200);
    });

    // Manipulação da lista de tarefas
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Digite uma tarefa válida!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', () => li.remove());

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    });