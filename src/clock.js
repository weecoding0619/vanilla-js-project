const days = document.querySelector('.days');
const clock = document.querySelector('.clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,'0');
  const minutes = String(date.getMinutes()).padStart(2,'0');
  const seconds = String(date.getSeconds()).padStart(2,'0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

function getDate() {
  const date = new Date();
  const month = String(date.getMonth());
  const day = String(date.getDate());
  const dow = String(date.getDay())
  const weekDay = ['일','월','화','수','목','금','토']
  days.innerText = `${month}월 ${day}일 ${weekDay[dow]}요일`
}

getDate();
setInterval(getDate, 1000);