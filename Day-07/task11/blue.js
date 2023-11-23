const para1 = document.querySelector('p');
const para2 = document.getElementsByTagName('p')[1];

function changeColorToBlue() {
    const touch = document.querySelector('p');
    touch.classList.add('blue');
    console.log('blue');

    touch.addEventListener("mouseleave", () => {
    touch.classList.remove('blue');
    console.log('black')
    });
}


function changeColorToSubrillance() {
    const click = document.getElementsByTagName('p')[1];
    click.classList.toggle('highlighted');
    console.log('highlighted');
}


para1.addEventListener("mouseover", changeColorToBlue);
para2.addEventListener('click', changeColorToSubrillance);