
let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

function setTime(){
    let now = new Date();

    let hours = now.getHours();
    let hourDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    let mins = now.getMinutes();
    let minDegrees = (mins / 60) *360 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    let seconds = now.getSeconds();
    let secondDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

}

setInterval(setTime, 1000);


