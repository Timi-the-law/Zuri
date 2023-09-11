function updateTime() {
    const currentTimeElement = document.getElementById("currentUTCTime");
    const currentTime = new Date().getTime(); // Get the current time in milliseconds
    currentTimeElement.textContent = `Current UTC Time: ${currentTime}`;
}

setInterval(updateTime, 1000);

function updateDateTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentDayElement = document.getElementById("current-day");

    const now = new Date();
    const currentDay = now.toLocaleDateString(undefined, { weekday: 'long' });
    const currentTime = now.getTime(); 

    currentDayElement.textContent = `Current Day: ${currentDay}`;
    currentTimeElement.textContent = `Current Time (in milliseconds): ${currentTime}`;
}

setInterval(updateDateTime, 1000); // 

