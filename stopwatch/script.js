let day = 0;
let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

let timer = false;

function stopwatch() {
    if (timer) {
        ms = ms + 1;
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (hr == 24) {
            day = day + 1;
            hr = 0;
            min = 0;
            sec = 0;
        }

        let dayString = day;
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let msString = ms;

        if (day < 10) dayString = "0" + dayString;
        if (hr < 10) hrString = "0" + hrString;
        if (min < 10) minString = "0" + minString;
        if (sec < 10) secString = "0" + secString;
        if (ms < 10) msString = "0" + msString;
        

        document.getElementById('day').innerHTML = dayString;
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('ms').innerHTML = msString;
        setTimeout("stopwatch()", 10);
    }
}

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;

}

function reset() {
    timer = false;
    day = 0;
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById("day").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("ms").innerHTML = "00";
    

}