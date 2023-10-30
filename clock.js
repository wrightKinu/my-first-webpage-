function updateTime() {
    var now = new Date();
    var timeElement = document.getElementById('time');
    timeElement.innerText = 'Current time: ' + now.toLocaleTimeString();
}
updateTime();
setInterval(updateTime, 1000); 