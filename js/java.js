document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('editButton');
    const card = document.getElementById('card');
    const editForm = document.getElementById('editForm');
    const nameInput = document.getElementById('nameInput');
    const positionInput = document.getElementById('positionInput');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');

    editButton.addEventListener('click', () => {
        const name = document.getElementById('name').innerText;
        const position = document.getElementById('position').innerText;

        nameInput.value = name;
        positionInput.value = position;
        
        document.body.style.backgroundColor = "#151515";
        card.classList.add('hidden');
        editButton.classList.add('hidden');
        editForm.classList.remove('hidden');
    });

    saveButton.addEventListener('click', () => {
        const newName = nameInput.value;
        const newPosition = positionInput.value;

        document.getElementById('name').innerText = newName;
        document.getElementById('position').innerText = newPosition;

        document.body.style.backgroundColor = "#f0f0f0";
        card.classList.remove('hidden');
        editButton.classList.remove('hidden');
        editForm.classList.add('hidden');
    });

    cancelButton.addEventListener('click', () => {
        document.body.style.backgroundColor = "#f0f0f0";
        editButton.classList.remove('hidden');
        card.classList.remove('hidden');
        editForm.classList.add('hidden');
    });
});
