function Timer() {

var now = new Date().getTime();

var distance = timerdate - now;

var days = Math.floor((distance /(1000 * 60 *60 * 24)) / (1000 * 60 * 60 * 24));

var hours = Math.floor((distance /(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + " Tage  " + hours + " Stunden  " + minutes + "m " + seconds + "s";

if (distance < 0) {
 clearInterval(x);
 document.getElementById("timer").innerHTML = "Jo Hochzeit steht an! Partytime!"
 }

}




var timerdate = new Date("Aug 24, 2019 13:00:00").getTime();

var x = setInterval(Timer(),1000); 



































































































