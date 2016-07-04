// your code here:
var seconds = 0;
var timerId = 0;

var startbutton = document.getElementById('start');
startbutton.addEventListener('click', function() {
var timerId = setInterval(updateTime, 1000);
var pausebutton = document.getElementById('pause');
pausebutton.addEventListener('click', function() {
  clearInterval(timerId);
});
var resetbutton = document.getElementById('reset');
resetbutton.addEventListener('click', function() {
clearInterval(timerId);
var timerId = document.getElementById('timer');
timerId.innerHTML = "Stop Watch";
seconds = 0;
});
});

function updateTime() {
var timerId = document.getElementById('timer');
timerId.innerHTML = "Time elapsed:" + seconds;
seconds++;
}
