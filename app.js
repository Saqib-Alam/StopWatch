var min=0;
var sec=0;
var msec=0;

var minute=document.getElementById("min");
var second=document.getElementById("sec");
var milliSec=document.getElementById("msec");

var interval;

function timer(){
    msec++
    milliSec.innerHTML=msec;
    if(msec>=100){
        sec++
        second.innerHTML=sec;
        msec=0
    }
    else if(sec>=60){
        min++
        minute.innerHTML=min;
        sec=0

    }
}

function start(){
    interval=setInterval(timer,10)
   var btn1 = document.getElementById("start");
    btn1.setAttribute('disabled', 'disabled')
}
// function disable(){
//     getElementById("start").disabled=true;
// }

function reset(){
    clearInterval(interval)
    milliSec.innerHTML=0
    second.innerHTML=0
    minute.innerHTML=0

   var vi  = document.getElementById("start")
    vi.removeAttribute('disabled', 'disabled')
}
function pause(){
    clearInterval(interval)
    var vi  = document.getElementById("start")
vi.removeAttribute('disabled', 'disabled')

}
// function dis(){
//     document.getElementById("start").disabled=true;
// }