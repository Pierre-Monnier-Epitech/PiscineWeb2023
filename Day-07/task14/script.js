const form = document.querySelector('form');
const outputList = document.querySelector('ul');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const textInput = document.querySelector('input').value;
    const selectedOption = document.querySelector('select').value;

    const listItem = document.createElement('li');
    listItem.classList.add('recherche');
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


function searchItems() {
    const searchTerm = document.querySelector('#searchTerm').value.toLowerCase();
    const searchType = document.querySelector('#searchType').value;

    const items = document.querySelectorAll('#outputList li');
    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        const itemType = item.classList[0];

        if ((searchType === 'all' || itemType === searchType) &&
            (searchTerm === '' || itemText.includes(searchTerm))) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function resetSearch() {
    const items = document.querySelectorAll('#outputList li');
    items.forEach(item => {
        item.style.display = 'block';
    });
}
