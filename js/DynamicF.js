(function(){
// Unique namespace: _DynamicF

const images_DynamicF = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/SoonA.png"}, 		//12PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/SoonA.png"}, 		//1230PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCA.png"}, 		//1PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCA.png"}, 		//130PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCA.png"},		//2PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCA.png"},		//230PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCF.png"},		//3PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCF.png"},		//330PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCF.png"},		//4PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCF.png"},		//430PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCJ.png"},		//5PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCJ.png"},		//530PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCJ.png"}, 		//6PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCJ.png"}, 		//630PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCM.png"},		//7PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCM.png"}, 		//730PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCM.png"},		//8PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCM.png"}, 		//830PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCM.png"},		//9PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCM.png"},		//930PMCT SArtist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCM.png"},		//10PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"},		//1030PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"}, 		//11PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"},		//1130PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"},		//12AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"}, 		//1230AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"}, 		//1AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"}, 		//130AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"}, 		//2AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//230AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//3AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//330AMCT Event Ended
// Add up to 36
];

function getCentralTime() {
  const nowUTC = new Date();
  const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralTimeString);
}

function getDynamicFIndex() {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = 12 * 60; // 12:00 PM
  const totalActiveMinutes = 15 * 60; // 12PM–3AM = 900 minutes

  // Before 12PM → show last image
  if (currentMinutes < startMinutes) {
    return images_DynamicF.length - 1;
  }

  let minutesSinceStart;
  if (now.getHours() >= 12) {
    minutesSinceStart = currentMinutes - startMinutes;
  } else {
    // After midnight but before 3AM
    minutesSinceStart = (24 * 60 - startMinutes) + currentMinutes;
  }

  // After 3AM (past end of schedule) → show last image
  if (minutesSinceStart >= totalActiveMinutes) {
    return images_DynamicF.length - 1;
  }

  return Math.floor(minutesSinceStart / 30); // 30-minute slots
}

function updateImage() {
  const imageIndex = getDynamicFIndex();
  const selectedImage = images_DynamicF[imageIndex];

  const container = document.getElementById('dynamicImageDynamicF');
  container.innerHTML = `<a href="${selectedImage.link}" target="_blank">
    <img src="${selectedImage.url}" alt="Dynamic Image" style="width: 100%; max-width: 840px;">
  </a>`;
}

setInterval(updateImage, 300000); // Every 5 minutes
updateImage(); // Initial update
})();