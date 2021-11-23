const hHand = document.getElementById("hHand");
const mHand = document.getElementById("mHand");
const sHand = document.getElementById("sHand");
const timeDisplay = document.getElementById("timeDisplay");

const displayTime = () => {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  let secondsDisplay = ``;
  let minutesDisplay = ``;
  let hoursDisplay = ``;

  if (seconds < 10) {
    secondsDisplay = `0${seconds}`;
  } else {
    secondsDisplay = seconds;
  }
  if (minutes < 10) {
    minutesDisplay = `0${minutes}`;
  } else {
    minutesDisplay = minutes;
  }
  if (hours < 10) {
    hoursDisplay = `0${hours}`;
  } else {
    hoursDisplay = hours;
  }

  const hDeg = ((hours + minutes / 60) / 12) * 360;
  const mDeg = (minutes / 60) * 360;
  const sDeg = (seconds / 60) * 360;

  hHand.style.transform = `rotateZ(${hDeg}deg)`;
  mHand.style.transform = `rotateZ(${mDeg}deg)`;
  sHand.style.transform = `rotateZ(${sDeg}deg)`;

  timeDisplay.innerHTML = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
};

setInterval(displayTime, 1000);
