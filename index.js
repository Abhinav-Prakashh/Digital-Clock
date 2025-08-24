function updateClock() {
    const now = new Date();
    // inbuilt function to get current date and time

    let hours = now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (sec < 10) {
        sec = "0" + sec;
    } // adding 0 if any number is less than 10

    const timestring = hours + ":" + mins + ":" + sec;
    //making a string for the time format
    document.getElementById("clock").textContent = timestring;
    // use getElementById and not getElementsById
    // displays the time
}

updateClock();
setInterval(updateClock, 1000); // updates the clock every 1000 milliseconds or 1 second