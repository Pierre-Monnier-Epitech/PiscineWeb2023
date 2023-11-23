const form = document.querySelector('form');
const outputList = document.querySelector('ul');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const textInput = document.querySelector('input').value;
    const selectedOption = document.querySelector('select').value;

    const listItem = document.createElement('li');
    listItem.textContent = textInput;

    if (selectedOption === 'note') {
        listItem.classList.add('note');
    } else if (selectedOption === 'email') {
        listItem.classList.add('email');
    } else if (selectedOption === 'todo') {
        listItem.classList.add('todo');
    }

    outputList.append(listItem);
    form.reset();
});