
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const audio = new Audio('./script/audio.mp3')

const pause = document.getElementsByTagName('button')[0];
const stopB = document.getElementsByTagName('button')[1];
const muteB = document.getElementsByTagName('button')[2];


ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);

ctx.lineWidth = 10;
ctx.stroke();


ctx.fillStyle = "#FFFFFF";
ctx.fill();

canvas.addEventListener('click', function(){
    audio.play();
    audio.loop =true;
    audio.playbackRate = 2;
})

pause.addEventListener('click', function() {
    audio.pause();
});

stopB.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
});

muteB.addEventListener('click', function() {
    audio.muted = !audio.muted;
});
