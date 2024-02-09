// happy birthday, me
var countDownDate = new Date("Aug 30, 2024 00:00:00").getTime();

// function amended from https://www.w3schools.com/howto/howto_js_countdown.asp
var interval = setInterval(function() {
    // get current date and difference
    var now = new Date().getTime();
    var timeDifference = countDownDate - now;
    
    // If the count down is finished, write some text
    if (timeDifference < 0) {
        document.getElementById("countdown").innerHTML = "Happy birthday!";
    }
    else {
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }
}, 1000);