const btn = document.querySelector('button');

    if (btn) {
        btn.addEventListener('click', function() {
            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                paragraph.style.display = 'none';
            });
        });
    }
