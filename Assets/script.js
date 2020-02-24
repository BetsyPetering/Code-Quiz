// This timer counts down any number of minutes
// Tried to changes to minutes and seconds - did not work
// Perhaps can change to seconds and start by 
//                        breaking seconds to minutes and seconds

function countDown(minutes) {
    var seconds = 60;
    var mins = minutes;
    function tick() {
        console.log("inside tick function");
        var counter = document.getElementById("timer");
        var current_minutes = mins-1;
        seconds--;
        console.log("seconds " + seconds);
        counter.innerHTML =  current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countDown(mins-1);
            }
        }
    }
    tick();
}
countDown(1);


