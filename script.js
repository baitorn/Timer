//////////////////////////////
// 🕒 HORLOGE
//////////////////////////////

function updateClock() {

    const now = new Date();

    const h =
        String(now.getHours()).padStart(2, "0");

    const m =
        String(now.getMinutes()).padStart(2, "0");

    const s =
        String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);

updateClock();

//////////////////////////////
// 🔔 ALARME
//////////////////////////////

let alarmTime = null;

let alarmSound = null;

let alarmPlaying = false;

window.setAlarm = function () {

    alarmTime =
        document.getElementById("alarmTime").value;

    if (!alarmTime) {

        alert("⚠️ Choisis une heure !");

        return;
    }

    alert("⏰ Alarme réglée pour " + alarmTime);
};

function checkAlarm() {

    if (!alarmTime || alarmPlaying) return;

    const now = new Date();

    const currentTime =
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    if (currentTime === alarmTime) {

        triggerAlarm();
    }
}

setInterval(checkAlarm, 1000);

function triggerAlarm() {

    alarmPlaying = true;

    // 🎵 SONNERIE CHOISIE
    const selectedRingtone =
        document.getElementById("ringtone").value;

    alarmSound =
        new Audio(selectedRingtone);

    alarmSound.loop = true;

    alarmSound.play()

        .then(() => {

            // 📳 vibration téléphone
            if (navigator.vibrate) {

                navigator.vibrate([
                    500,
                    300,
                    500,
                    300
                ]);
            }

            alert("🔔 ALARME !!!");
        })

        .catch(error => {

            console.log(error);

            alert(
                "⚠️ Le navigateur bloque le son."
            );
        });
}

window.stopAlarm = function () {

    if (alarmSound) {

        alarmSound.pause();

        alarmSound.currentTime = 0;
    }

    alarmPlaying = false;

    if (navigator.vibrate) {

        navigator.vibrate(0);
    }
};

//////////////////////////////
// ⏱️ CHRONOMETRE
//////////////////////////////

let chronoSeconds = 0;

let chronoInterval = null;

function updateChronoDisplay() {

    const h =
        String(
            Math.floor(chronoSeconds / 3600)
        ).padStart(2, "0");

    const m =
        String(
            Math.floor(
                (chronoSeconds % 3600) / 60
            )
        ).padStart(2, "0");

    const s =
        String(
            chronoSeconds % 60
        ).padStart(2, "0");

    document.getElementById("chrono").textContent =
        `${h}:${m}:${s}`;
}

window.startChrono = function () {

    if (chronoInterval) return;

    chronoInterval = setInterval(() => {

        chronoSeconds++;

        updateChronoDisplay();

    }, 1000);
};

window.stopChrono = function () {

    clearInterval(chronoInterval);

    chronoInterval = null;
};

window.resetChrono = function () {

    clearInterval(chronoInterval);

    chronoInterval = null;

    chronoSeconds = 0;

    updateChronoDisplay();
};

updateChronoDisplay();
