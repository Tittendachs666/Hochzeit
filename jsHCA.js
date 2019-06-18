let weddingDate;

function updateCountdown() {

var now = new Date();
var distance = weddingDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + " Tage  " + hours + " Stunden  " + minutes + "m " + seconds + "s";

if (distance < 0) {
 clearInterval(x);
 document.getElementById("timer").innerHTML = "Jo Hochzeit steht an! Partytime!"
 }

}

function main() {
    weddingDate = new Date("Aug 24, 2019 13:00:00");
    setInterval(this.updateCountdown,1000);
}


function password() {

 if(document.getElementById("button").click == true){
  if(document.getElementById("passW") == "Singularität"){
   window.location = "index.html";
  }
  else{
   alert("falsches Passwort");
  }
 }
}