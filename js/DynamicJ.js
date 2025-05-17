(function(){
// Unique namespace: _DynamicJ

const images_DynamicJ = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonE.png", link: "#" }, 		//12PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonE.png", link: "#" }, 		//1230PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonE.png", link: "#" }, 		//1PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCE.png", link: "#" }, 			//130PMCT 	Athena
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCE.png", link: "#" },			//2PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCE.png", link: "#" },			//230PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCE.png", link: "#" },			//3PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCI.png", link: "#" },			//330PMCT 	Nashu
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCI.png", link: "#" },			//4PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCI.png", link: "#" },			//430PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCI.png", link: "#" },			//5PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCC.png", link: "#" },			//530PMCT 	Fray Returns
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCC.png", link: "#" }, 			//6PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCC.png", link: "#" }, 			//630PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCL.png", link: "#" },			//7PMCT 	Urianger Tags in Early
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCL.png", link: "#" }, 			//730PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCL.png", link: "#" },			//8PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCL.png", link: "#" }, 			//830PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/ClearSlot.png", link: "#" },	//9PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/ClearSlot.png", link: "#" },	//930PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png", link: "#" },		//10PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png", link: "#" },		//1030PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png", link: "#" },		//11PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/CafeStaff/NPCFFA.png", link: "#" },		//1130PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png", link: "#" },		//12AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png", link: "#" },		//1230AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png", link: "#" },		//1AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png", link: "#" },		//130AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "#" },		//2AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "#" },		//230AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "#" },		//3AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "#" },		//330AMCT Event Ended
// Add up to 36
];

function getCentralTime() {
  const nowUTC = new Date();
  const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralTimeString);
}

function getDynamicJIndex() {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = 12 * 60; // 12:00 PM
  const totalActiveMinutes = 15 * 60; // 12PM–3AM = 900 minutes

  // Before 12PM → show last image
  if (currentMinutes < startMinutes) {
    return images_DynamicJ.length - 1;
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
    return images_DynamicJ.length - 1;
  }

  return Math.floor(minutesSinceStart / 30); // 30-minute slots
}

function updateImage() {
  const imageIndex = getDynamicJIndex();
  const selectedImage = images_DynamicJ[imageIndex];

  const container = document.getElementById('dynamicImageDynamicJ');
  container.innerHTML = `<a href="${selectedImage.link}" target="_blank">
    <img src="${selectedImage.url}" alt="Dynamic Image" style="width: 100%; max-width: 840px;">
  </a>`;
}

setInterval(updateImage, 300000); // Every 5 minutes
updateImage(); // Initial update
})();