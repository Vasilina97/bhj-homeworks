let currentTime = 59;
let timer = document.getElementById('timer');
let counter = setInterval(countDown,100);
function countDown() {
    timer.textContent = currentTime;
    currentTime--;
    if (currentTime < -1) {
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
    }
}