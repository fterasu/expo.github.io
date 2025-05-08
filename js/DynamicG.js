(function(){
// Unique namespace: _DynamicG

const images_DynamicG = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/SoonA.png"}, 		//12PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/SoonA.png"}, 		//1230PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCBreak.png"}, 	//1PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCB.png"}, 		//130PMCT 	Ysayle
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCB.png"},		//2PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCB.png"},		//230PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCB.png"},		//3PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCG.png"},		//330PMCT	Tenshi Rae
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCG.png"},		//4PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCG.png"},		//430PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCG.png"},		//5PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCBreak.png"},	//530PMCT	Break
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCBreak.png"}, 	//6PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCBreak.png"},	//630PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCK.png"},		//7PMCT 	Dancing Green Moves
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCN.png"}, 		//730PMCT 	Bruha?
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCN.png"},		//8PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCN.png"}, 		//830PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"},		//9PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png"},		//930PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCFFA.png"},		//10PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCFFA.png"},		//1030PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCFFA.png"},		//11PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/NPCFFA.png"},		//1130PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//12AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//1230AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//1AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//130AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png"},		//2AMCT Event Ended
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

function getDynamicGIndex() {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = 12 * 60; // 12:00 PM
  const totalActiveMinutes = 15 * 60; // 12PM–3AM = 900 minutes

  // Before 12PM → show last image
  if (currentMinutes < startMinutes) {
    return images_DynamicG.length - 1;
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
    return images_DynamicG.length - 1;
  }

  return Math.floor(minutesSinceStart / 30); // 30-minute slots
}

function updateImage() {
  const imageIndex = getDynamicGIndex();
  const selectedImage = images_DynamicG[imageIndex];

  const container = document.getElementById('dynamicImageDynamicG');
  container.innerHTML = `<a href="${selectedImage.link}" target="_blank">
    <img src="${selectedImage.url}" alt="Dynamic Image" style="width: 100%; max-width: 840px;">
  </a>`;
}

setInterval(updateImage, 300000); // Every 5 minutes
updateImage(); // Initial update
})();