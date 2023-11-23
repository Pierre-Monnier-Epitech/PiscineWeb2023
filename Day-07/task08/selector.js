const target = document.querySelectorAll('a[target]');

target.forEach(link => {
    link.style.opacity = 0.5;
});