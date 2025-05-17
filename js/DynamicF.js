(function(){
// Unique namespace: _DynamicF

const images_DynamicF = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonA.png"}, 		//12PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonA.png"}, 		//1230PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonA.png"}, 		//1PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCA.png"}, 			//130PMCT 	Tataru Blake
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCA.png"},			//2PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCA.png"},			//230PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCA.png"},			//3PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCF.png"},			//330PMCT 	Ziggy Ardbert
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCF.png"},			//4PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCF.png"},			//430PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCF.png"},			//5PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCJ.png"},			//530PMCT 	Zenos Surge
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCJ.png"}, 			//6PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCJ.png"}, 			//630PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCJ.png"},			//7PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCM.png"}, 			//730PMCT 	Meteor (which one?)
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCM.png"},			//8PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCM.png"}, 			//830PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},		//9PMCT 	Break
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},		//930PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png"},		//10PMCT 	Whoever wants to come
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png"},		//1030PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png"},		//11PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png"},		//1130PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},		//12AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},		//1230AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},		//1AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},		//130AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png"},		//2AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png"},		//230AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png"},		//3AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png"},		//330AMCT Event Ended
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