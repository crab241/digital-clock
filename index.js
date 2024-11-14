function updateTime(){
    const now = new Date();
    const houres = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${houres}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateTime();
setInterval(updateTime);