function timerUpdate() {
    const timer = document.getElementById("dynamicTimer");
    const nextRace = new Date(2028, 9, 22);
    const millisecondsLeft = Math.max(0, nextRace - new Date());
    const totalSecondsLeft = Math.floor(millisecondsLeft / 1000);
    const days = Math.floor(totalSecondsLeft / 86400);
    const hours = Math.floor((totalSecondsLeft % 86400) / 3600);
    const minutes = Math.floor((totalSecondsLeft % 3600) / 60);
    const seconds = totalSecondsLeft % 60;

    timer.querySelector('[data-unit="days"]').textContent = days;
    timer.querySelector('[data-unit="hours"]').textContent = String(hours).padStart(2, "0");
    timer.querySelector('[data-unit="minutes"]').textContent = String(minutes).padStart(2, "0");
    timer.querySelector('[data-unit="seconds"]').textContent = String(seconds).padStart(2, "0");
}

timerUpdate();
setInterval(timerUpdate, 1000);
