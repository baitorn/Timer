//////////////////////
// 🔔 REVEIL
//////////////////////

let alarmTime = null;
let alarmActive = false;
let alarmSound = null;

//////////////////////
// ⏱️ CHRONO
//////////////////////

let chronoSeconds = 0;
let chronoInterval = null;

//////////////////////
// 🕒 HORLOGE
//////////////////////

function updateClock() {
  let now = new Date();

  let h = String(now.getHours()).padStart(2, '0');
  let m = String(now.getMinutes()).padStart(2, '0');
  let s = String(now.getSeconds()).padStart(2, '0');

  document.getElementById("clock").textContent = `${h}:${m}:${s}`;

  // vérifier alarme
  if (alarmTime && `${h}:${m}` === alarmTime && !alarmActive) {
    triggerAlarm();
  }
}

setInterval(updateClock, 1000);

//////////////////////
// 🔔 ALARME
//////////////////////

function setAlarm() {
  alarmTime = document.getElementById("alarmTime").value;
  alert("⏰ Alarme réglée pour " + alarmTime);
}

function triggerAlarm() {
  alarmActive = true;

  alarmSound = new Audio("https://www.soundjay.com/buttons/sounds/beep-07.mp3");
  alarmSound.loop = true;
  alarmSound.play();

  alert("🔔 ALARME !!!");
}

function stopAlarm() {
  if (alarmSound) {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }
  alarmActive = false;
}

//////////////////////
// ⏱️ CHRONO
//////////////////////

function updateChrono() {
  let h = String(Math.floor(chronoSeconds / 3600)).padStart(2, '0');
  let m = String(Math.floor((chronoSeconds % 3600) / 60)).padStart(2, '0');
  let s = String(chronoSeconds % 60).padStart(2, '0');

  document.getElementById("chrono").textContent = `${h}:${m}:${s}`;
}

function startChrono() {
  if (!chronoInterval) {
    chronoInterval = setInterval(() => {
      chronoSeconds++;
      updateChrono();
    }, 1000);
  }
}

function stopChrono() {
  clearInterval(chronoInterval);
  chronoInterval = null;
}

function resetChrono() {
  stopChrono();
  chronoSeconds = 0;
  updateChrono();
}
