// TimeHelper.js

export function getCentralTime() {
  const nowUTC = new Date();
  const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralTimeString);
}

export function getIndexByTime(startHour, totalImages) {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = startHour * 60;
  const endMinutes = 3 * 60; // ⬅️ Changed from 4 * 60 to 3 * 60

  if (currentMinutes < startMinutes) {
    return 0;
  }

  if (currentMinutes >= endMinutes) {
    return totalImages - 1;
  }

  const elapsedMinutes = currentMinutes - startMinutes;
  const interval = 30; // 30-minute intervals
  const index = Math.floor(elapsedMinutes / interval);

  return Math.min(index, totalImages - 1);
}