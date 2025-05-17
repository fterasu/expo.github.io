(function(){
// Unique namespace: _DynamicD

const images_DynamicD = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonD.png"}, 																		//12PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/SoonD.png"}, 																		//1230PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistD.png", link: "https://expoartists.carrd.co/#profile04" }, 					//1PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistD.png", link: "https://expoartists.carrd.co/#profile04" }, 					//130PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistD.png", link: "https://expoartists.carrd.co/#profile04" }, 					//2PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistD.png", link: "https://expoartists.carrd.co/#profile04" }, 					//230PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistI.png", link: "https://expoartists.carrd.co/#profile09" }, 					//3PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistI.png", link: "https://expoartists.carrd.co/#profile09" },					//330PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistI.png", link: "https://expoartists.carrd.co/#profile09" }, 					//4PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistI.png", link: "https://expoartists.carrd.co/#profile09" }, 					//430PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},																		//5PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistM.png", link: "https://expoartists.carrd.co/#profile14" }, 					//530PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistM.png", link: "https://expoartists.carrd.co/#profile14" }, 					//6PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistM.png", link: "https://expoartists.carrd.co/#profile14" }, 					//630PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistM.png", link: "https://expoartists.carrd.co/#profile14" }, 					//7PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistH.png", link: "https://expoartists.carrd.co/#profile08" }, 					//730PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistH.png", link: "https://expoartists.carrd.co/#profile08" }, 					//8PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/AlleyArtists/ArtistH.png", link: "https://expoartists.carrd.co/#profile08" }, 					//830PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"},																		//9PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//930PMCT SArtist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//10PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//1030PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//11PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//1130PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//12AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//1230AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//1AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Break.png"}, 																		//130AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "https://www.twitch.tv/tiffanylockheart" }, 					//2AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "https://www.twitch.tv/tiffanylockheart" }, 					//230AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "https://www.twitch.tv/tiffanylockheart" }, 					//3AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Banners/DebugBanners/Ending.png", link: "https://www.twitch.tv/tiffanylockheart" },					//330AMCT Event Ended
// Add up to 36
];

function getCentralTime() {
  const nowUTC = new Date();
  const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralTimeString);
}

function getDynamicDIndex() {
  const now = getCentralTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = 12 * 60; // 12:00 PM
  const totalActiveMinutes = 15 * 60; // 12PM–3AM = 900 minutes

  // Before 12PM → show last image
  if (currentMinutes < startMinutes) {
    return images_DynamicD.length - 1;
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
    return images_DynamicD.length - 1;
  }

  return Math.floor(minutesSinceStart / 30); // 30-minute slots
}

function updateImage() {
  const imageIndex = getDynamicDIndex();
  const selectedImage = images_DynamicD[imageIndex];

  const container = document.getElementById('dynamicImageContainerD');
  container.innerHTML = `<a href="${selectedImage.link}" target="_blank">
    <img src="${selectedImage.url}" alt="Dynamic Image" style="width: 100%; max-width: 840px;">
  </a>`;
}

setInterval(updateImage, 300000); // Every 5 minutes
updateImage(); // Initial update
})();