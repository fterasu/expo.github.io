(function(){
// Unique namespace: _DynamicI

const images_DynamicI = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonD.png"}, 		//12PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonD.png"}, 		//1230PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonD.png"}, 		//1PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCD.png"}, 			//130PMCT 	Emet
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCD.png"},			//2PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCD.png"},			//230PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCD.png"},			//3PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCH.png"},			//330PMCT 	Hildibrand
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCH.png"},			//4PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCH.png"},			//430PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCH.png"},			//5PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/ClearSlot.png"},	//530PMCT 	3 Slot NPC time
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/ClearSlot.png"},	//6PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/ClearSlot.png"}, 	//630PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCC.png"},			//7PMCT 	Fray Jumps to this Block when Urianger Joins
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCO.png"}, 			//730PMCT 	Thancred Tags in
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCO.png"},			//8PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCO.png"}, 			//830PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/ClearSlot.png"},	//9PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/ClearSlot.png"},	//930PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png"},		//10PMCT 
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

function getDynamicIIndex() {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = 12 * 60; // 12:00 PM
  const totalActiveMinutes = 15 * 60; // 12PM–3AM = 900 minutes

  // Before 12PM → show last image
  if (currentMinutes < startMinutes) {
    return images_DynamicI.length - 1;
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
    return images_DynamicI.length - 1;
  }

  return Math.floor(minutesSinceStart / 30); // 30-minute slots
}

function updateImage() {
  const imageIndex = getDynamicIIndex();
  const selectedImage = images_DynamicI[imageIndex];

  const container = document.getElementById('dynamicImageDynamicI');
  container.innerHTML = `<a href="${selectedImage.link}" target="_blank">
    <img src="${selectedImage.url}" alt="Dynamic Image" style="width: 100%; max-width: 840px;">
  </a>`;
}

setInterval(updateImage, 300000); // Every 5 minutes
updateImage(); // Initial update
})();