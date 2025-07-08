let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  const laps = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = display.textContent;
  laps.appendChild(li);
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("lapBtn").addEventListener("click", lapTime);

updateDisplay();
