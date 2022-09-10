const clock = document.querySelector("h2#clock");
const ampm = document.querySelector("#ampm");

function getClock() {
  const date = new Date();
  const hours = String(
    date.getHours() > 12 ? date.getHours() % 12 : date.getHours()
  ).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
function getAmpm() {
  const date = new Date();
  const checkAmpm = date.getHours() >= 12 ? "오후" : "오전";
  ampm.innerText = `${checkAmpm}\u00A0 `;
}

getClock();
getAmpm();
setInterval(getClock, 1000);
setInterval(getAmpm, 1000);
