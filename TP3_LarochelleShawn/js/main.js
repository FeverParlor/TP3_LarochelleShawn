/* Control Panel for next Event in index Hero */
const nextEvent = {
  series: "Breakpoint:",
  name: "Fracture",
  date: "2026-09-19T20:00:00",
  dateDisplay: "September 19, 2026",
  location: "Montréal, QC",
};
document.getElementById("event-series").textContent = nextEvent.series;

document.getElementById("event-name").textContent = nextEvent.name;

document.getElementById("event-details").textContent =
  nextEvent.dateDisplay + " | " + nextEvent.location;

const eventDate = new Date(nextEvent.date).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");

  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");

  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");

  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
