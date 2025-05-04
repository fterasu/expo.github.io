// TimeHelper.js
function getCentralTime() {
  const nowUTC = new Date();
  const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralTimeString);
}

function getIndexByTime(startHour, slotCount) {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = startHour * 60;
  const endMinutes = (startHour + (slotCount * 0.5)) * 60;

  if (currentMinutes < startMinutes) return 0;
  if (currentMinutes >= endMinutes) return slotCount - 1;

  for (let i = 0; i < slotCount; i++) {
    const slotStart = startMinutes + (i * 30);
    const slotEnd = slotStart + 30;
    if (currentMinutes >= slotStart && currentMinutes < slotEnd) {
      return i;
    }
  }
  return slotCount - 1;
}