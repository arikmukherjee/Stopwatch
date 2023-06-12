let stopwatchInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 10);
  document.getElementById("startBtn").disabled = true;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById("startBtn").disabled = false;
}

function resetStopwatch() {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateStopwatch();
}

function updateStopwatch() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  const formattedTime = formatTime(minutes, seconds, milliseconds);
  document.getElementById("stopwatch").textContent = formattedTime;
}

function formatTime(minutes, seconds, milliseconds) {
  return (
    padTime(minutes) +
    ":" +
    padTime(seconds) +
    ":" +
    padTime(Math.floor(milliseconds / 10))
  );
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
