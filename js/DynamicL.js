(function(){
// Unique namespace: _DynamicL

const images_DynamicL = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/SoonD.jpg", link: "#" },		//12PMCT 	Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/SoonD.jpg", link: "#" },		//1230PMCT	Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" }, 		//1PMCT 	Starting
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" }, 		//130PMCT 	
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//2PMCT 	Cancelled
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//230PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/AuctionArtists/NormHost.jpg", link: "#" },		//3PMCT 	Norm
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//330PMCT 	
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/AuctionArtists/NormHost.jpg", link: "#" },		//4PMCT 	Norm
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//430PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/AuctionArtists/AuctionArtistC.jpg", link: "#" },		//5PMCT 	Amanda
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//530PMCT 	
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/AuctionArtists/AuctionArtistC.jpg", link: "#" }, 		//6PMCT 	Amanda
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" }, 		//630PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/ClearSlot.png", link: "#" },	//7PMCT 	unknown
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//730PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/ClearSlot.png", link: "#" },	//8PMCT 	unknown
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" }, 		//830PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//9PMCT 	
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//930PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//10PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//1030PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//11PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//1130PMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//12AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//1230AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//1AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Break.jpg", link: "#" },		//130AMCT 
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Ending.jpg", link: "#" },		//2AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Ending.jpg", link: "#" },		//230AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Ending.jpg", link: "#" },		//3AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/241e6ad67ae6fe127b132f0acbafd9ae661cca44/Banners/DebugBanners/Ending.jpg", link: "#" },		//330AMCT Event Ended
// Add up to 36
];

function getCentralTime() {
  const nowUTC = new Date();
  const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralTimeString);
}

function getDynamicLIndex() {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = 12 * 60; // 12:00 PM
  const totalActiveMinutes = 15 * 60; // 12PM–3AM = 900 minutes

  // Before 12PM → show last image
  if (currentMinutes < startMinutes) {
    return images_DynamicL.length - 1;
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
    return images_DynamicL.length - 1;
  }

  return Math.floor(minutesSinceStart / 30); // 30-minute slots
}

function updateImage() {
  const imageIndex = getDynamicLIndex();
  const selectedImage = images_DynamicL[imageIndex];

  const container = document.getElementById('dynamicImageDynamicL');
  container.innerHTML = `<a href="${selectedImage.link}" target="_blank">
    <img src="${selectedImage.url}" alt="Dynamic Image" style="width: 100%; max-width: 840px;">
  </a>`;
}

setInterval(updateImage, 300000); // Every 5 minutes
updateImage(); // Initial update
})();