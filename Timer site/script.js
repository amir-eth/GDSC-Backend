let start = document.getElementById("start")
let reset = document.getElementById("reset")

let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

let setTimer = null

start.addEventListener("click", function() {
    function Timerset(){
        setTimer = setInterval(function(){
            timer()
        }
        ,1000)}
    Timerset() 
})
reset.addEventListener("click", function(){
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    stopTheTimer()
})
function timer(){
    parseInt(hour.value); parseInt(minute.value); parseInt(second.value);    
    if(hour.value == 0 && minute.value == 0 && second.value == 0) {
        stopTheTimer();
        alertPop();
    }
    if(second.value != 0) {
        second.value --; 
    }
    else if(minute.value!=0 && hour.value == 0) {
        minute.value --;
        second.value = 59
    }
    else if(hour.value != 0 && minute.value == 0 && second.value == 0) {
        hour.value --;
        minute.value = 59;
        second.value = 59
    }
    return
}
function alertPop(){
    alert("Time is up!")
}
function stopTheTimer() {
    clearInterval(setTimer);
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Timerset();
    }
});