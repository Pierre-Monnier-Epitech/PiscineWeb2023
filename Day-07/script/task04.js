let tailleText = 16
const button = document.getElementsByTagName('button')[0];
const button1 = document.getElementsByTagName('button')[1];
const select = document.querySelector('select');

button1.addEventListener("click", function() {
    tailleText -=2;
    document.querySelector('section').style.fontSize = `${tailleText}px` ;
    });

button.addEventListener("click", function() {
    tailleText +=2;
    document.querySelector('section').style.fontSize = `${tailleText}px` ;
    });

select.addEventListener("change", function(){
    const choix = select.value
    console.log(choix)
    document.body.style.backgroundColor = choix;
})