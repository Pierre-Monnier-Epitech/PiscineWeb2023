const btn = document.querySelector('button');

    if (btn) {
        btn.addEventListener('click', function() {
            const inputValue = document.querySelector('input').value;
            const newDiv = document.createElement('div');
            newDiv.textContent = inputValue;
            btn.parentNode.insertBefore(newDiv, btn.nextSibling);
       
        });
    }