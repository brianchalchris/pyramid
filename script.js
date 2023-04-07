var pyramidTime = 1;
var timer = 0;
var peak = 10;
var goUp = true;
var click = false;

document.body.addEventListener('click', function() {
    click = true;
});

document.body.addEventListener('touchstart', function(event) {
    event.preventDefault();
    click = true;
});

function getNextPyramid(pyramidTime) {
    if (pyramidTime == peak) {
        goUp = false;
    }

    if (pyramidTime == 1) {
        goUp = true;
    }

    if (goUp) {
        return pyramidTime + 1;
    } else {
        return pyramidTime - 1;
    }
}

var myFunc = setInterval(function() {
    if (timer > pyramidTime) {
        pyramidTime = getNextPyramid(pyramidTime);
        timer = 0;
        click = false;
    }

    document.getElementById("time").innerHTML = pyramidTime - timer;
    document.getElementById("time").style.color="green";
    
    if (click) {
        document.getElementById("time").style.color="red";
        timer++;
    }
}, 1000);
