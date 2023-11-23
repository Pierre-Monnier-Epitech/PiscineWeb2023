var click = document.querySelector('footer div');
var compteur = 0;

document.querySelector('footer div').innerHTML = compteur;

click.addEventListener('click', function(){
    compteur+=1
    document.querySelector('footer div').innerHTML = compteur;

})