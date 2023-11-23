let footer = document.querySelector('footer div');
let word = ""

document.addEventListener("keydown", (event) => {
    word += event.key; 
    footer.innerHTML = word.substring(word.length-42, word.length );
});