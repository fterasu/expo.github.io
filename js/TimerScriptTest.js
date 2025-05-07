// timer.js
function getCentralTime() {
  const nowUTC = new Date();
  const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralTimeString);
}

function getDynamicIndex(imageArray) {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = 12 * 60;
  const totalActiveMinutes = 15 * 60;

  if (currentMinutes < startMinutes) {
    return imageArray.length - 1;
  }

  let minutesSinceStart;
  if (now.getHours() >= 12) {
    minutesSinceStart = currentMinutes - startMinutes;
  } else {
    minutesSinceStart = (24 * 60 - startMinutes) + currentMinutes;
  }

  if (minutesSinceStart >= totalActiveMinutes) {
    return imageArray.length - 1;
  }

  return Math.floor(minutesSinceStart / 30);
}