const play_btn = document.getElementById("play")
const audio = document.getElementById("audio")
const pause_btn = document.getElementById("pause")
const reinicio_btn = document.getElementById("reinicio")
const image_gira = document.getElementById("image")

play_btn.addEventListener('click',()=>{
    audio.play();
    image_gira.style.animationPlayState = "running"
})
pause_btn.addEventListener('click',()=>{
    audio.load();
    image_gira.style.animationPlayState = "paused"
})
reinicio_btn.currentTime('click',()=>{
    audio.reinicio();
    image_gira.style.animationPlayState = "paused"
})


//const reiniciar_btn = document.querySelector("reiniciar");
//const sonido = cargarSonido("sonido");
//reiniciar_btn.onclick = () => {
//    audio.currentTime = 0;
//};
// estaba tratando de que el audio se vuelva a reproducir cuando se esta reproduciendo sin embargo no pude lograrlo ;-;
