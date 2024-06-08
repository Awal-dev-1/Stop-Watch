const clock = document.getElementById("clock");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
const pause = document.getElementById("pause");

let hour = 0;
let minute = 0;
let second = 0;


const updateClock = () =>{

    let dlHour = 0;
    let dlMinute = 0;
    let dlSecond = 0;


    second++
    if(second / 60 === 1){
        second = 0;
        minute++

        if(minute / 60 === 1){
            minute = 0;
            hour++
        } else if(hour === 60) {
            second++;
        }
    }

  dlHour = hour < 10 ? "0" + hour : hour
  dlMinute = minute < 10 ? "0" + minute : minute
  dlSecond = second < 10 ? "0" + second : second


    clock.innerText = `${dlHour}:${dlMinute}:${dlSecond}`
}


let timerRun = 'run';
let timerStop = 'stop'
let timerInterval = null;

play.addEventListener("click",()=>{
    if(timerRun === "run"){
        timerInterval = window.setInterval(updateClock, 1000);
    }
})

pause.addEventListener("click",()=>{
    if(timerStop === "stop"){
      clearInterval(timerInterval)
    }
})

reset.addEventListener("click",()=>{
  window.clearInterval(timerInterval);

  hour = 0
  minute = 0
  second = 0

  clock.innerText = '00:00:00'
})