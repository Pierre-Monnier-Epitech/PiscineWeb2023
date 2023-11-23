var footer = document.querySelector('footer div');
document.querySelector('footer div').innerHTML = "What's your name ?";

footer.addEventListener('click', function(){
    var name = "";
    while (name === "") {
    name = prompt();
    }
    let result = confirm('Are you sure that ' + name + ' is your name ? ');

    if (result == true) {
        document.querySelector('footer div').innerHTML = "Hello " + name + "!";
    }
})