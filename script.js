//define variables to hold values
let seconds = 0;
let minutes = 0;
let hours = 0;
let finalSeconds = 0;
let finalMinutes = 0;
let finalHours = 0;

let interval = null;
let status = 'stopped';


function stopWatch() {
    seconds++;
    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 == 1) {
            minutes = 0;
            hours++;
        }
    }
    if (seconds < 10) {
        finalSeconds = '0' + seconds.toString();
    }
    else {
        finalSeconds = seconds;
    }
    if (minutes < 10) {
        finalMinutes = '0' + minutes.toString();
    }
    else {
        finalMinutes = minutes;
    }
    if (hours < 10) {
        finalHours = '0' + hours.toString();
    }
    else {
        finalHours = hours;
    }
    //display updated value to user
    document.getElementById('display').innerHTML = finalHours + ':' + finalMinutes + ":" + finalSeconds;
}

//calling stopWatch function every 1 seconds
//  window.setInterval(stopWatch, 1000);

function startStop() {
    if (status == 'stopped') {
        //start stop watch
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStop').innerHTML = 'Stop';
        status = 'started';
    }
    else {
        window.clearInterval(interval);
        document.getElementById('startStop').innerHTML = 'Start';
        status = 'stopped';
    }

}

//fuunction to reset display
function clearDisplay() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    document.getElementById('startStop').innerHTML = 'Start';



}
