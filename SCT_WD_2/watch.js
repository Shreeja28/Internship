let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

const timeDisplay = document.querySelector(".timer-display");

let timerInterval = null;

const formatTime = (value) => (value < 10 ? "0" + value : value);

const formatMilliseconds = (value) => {
    if (value < 10) return "00" + value;
    if (value < 100) return "0" + value;
    return value;
};

// Update the timer display
const updateDisplay = () => {
    const formattedTime = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${formatMilliseconds(milliseconds)}`;
    timeDisplay.innerHTML = formattedTime;
};

const startTimer = () => {
    if (timerInterval !== null) clearInterval(timerInterval); // Clear any existing interval
    timerInterval = setInterval(runTimer, 10);
};

const pauseTimer = () => {
    clearInterval(timerInterval);
};

const resetTimer = () => {
    clearInterval(timerInterval);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay(); // Reset the display to default
};

const runTimer = () => {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
};

document.getElementById("start-timer").addEventListener("click", startTimer);
document.getElementById("pause-timer").addEventListener("click", pauseTimer);
document.getElementById("reset-timer").addEventListener("click", resetTimer);

// Initialize display on load
updateDisplay();