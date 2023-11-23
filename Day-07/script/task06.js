let canvas = document.querySelector("canvas");

let zone = document.querySelector("footer div");
let zone_coord = zone.getBoundingClientRect();

let exos = document.getElementsByClassName('exercice')[0];
let exos_coord = exos.getBoundingClientRect();

let footer = document.querySelector("footer");
let box2 = footer.getElementsByTagName("div")[1];

let mousedown = false;

canvas.addEventListener("mousedown", () => {
    mousedown = true;
})

document.addEventListener("mouseup", () => {
    mousedown = false;
})

zone.addEventListener("mousemove", (e) => {
    if (mousedown) {
        if(e.pageX >= zone_coord.left + canvas.clientWidth/2 && e.pageX <= zone_coord.left + zone.clientWidth - canvas.clientWidth/2 && e.pageY >= zone_coord.top + canvas.clientHeight/2 && e.pageY <= zone_coord.top + zone.clientHeight - canvas.clientHeight/2 ) {

            canvas.style.position = "absolute";
            canvas.style.left = e.pageX - exos_coord.left - canvas.clientWidth/2 + "px";
            canvas.style.top = e.pageY - exos_coord.top  - canvas.clientHeight/2 + "px";

            box2.innerHTML = `New coordinates =&gt; {x:${canvas.style.left}, y:${canvas.style.top}}`
        }
    }
})

//je me suis fait aider pour ce task 