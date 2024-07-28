function playGunShot(){
    var gunshot = new Audio('sfx/laser.mp3');
    gunshot.play();
}
document.addEventListener("click", playGunShot);