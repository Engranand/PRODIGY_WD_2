let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function timeToString(time) {
  let diff = new Date(time);
  let hrs = diff.getUTCHours().toString().padStart(2, '0');
  let mins = diff.getUTCMinutes().toString().padStart(2, '0');
  let secs = diff.getUTCSeconds().toString().padStart(2, '0');
  let ms = Math.floor(diff.getUTCMilliseconds() / 10).toString().padStart(2, '0'); // Hundredths
  return `${hrs}:${mins}:${secs}.${ms}`;
}

function updateDisplay() {
  document.getElementById("display").innerText = timeToString(elapsedTime);
}

function start() {
  if (timerInterval) return;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10); // update every 10 ms
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = timeToString(elapsedTime);
  const li = document.createElement("li");
  li.innerText = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(li);
}
