(function(){
const images_dynamicA = [
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/SoonA.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 		//12PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/SoonA.png", link: "https://www.youtube.com/watch?v=WMP4HH7mct0" }, 				//1230PMCT Starting Soon
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistA.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" }, 	//1PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistA.png", link: "https://www.youtube.com/watch?v=tGPBdVSFFow" }, 				//130PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistA.png", link: "https://www.youtube.com/watch?v=nN_hkz56n8Y" }, 				//2PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistA.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 	//230PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistF.png", link: "https://www.youtube.com/watch?v=WMP4HH7mct0" }, 				//3PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistF.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" },		//330PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistF.png", link: "https://www.youtube.com/watch?v=nN_hkz56n8Y" }, 				//4PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistF.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 	//430PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://www.youtube.com/watch?v=WMP4HH7mct0" }, 				//5PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistK.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" }, 	//530PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistK.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" }, 	//6PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistK.png", link: "https://www.youtube.com/watch?v=tGPBdVSFFow" }, 				//630PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistK.png", link: "https://www.youtube.com/watch?v=nN_hkz56n8Y" }, 				//7PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistI.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 	//730PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistI.png", link: "https://www.youtube.com/watch?v=WMP4HH7mct0" }, 				//8PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ArtistI.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" }, 	//830PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://www.youtube.com/watch?v=nN_hkz56n8Y" }, 				//9PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 		//930PMCT SArtist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://www.youtube.com/watch?v=WMP4HH7mct0" }, 				//10PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" }, 		//1030PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" }, 		//11PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://www.youtube.com/watch?v=tGPBdVSFFow" }, 				//1130PMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://www.youtube.com/watch?v=nN_hkz56n8Y" }, 				//12AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 		//1230AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://www.youtube.com/watch?v=WMP4HH7mct0" }, 				//1AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/break.png", link: "https://youtu.be/OG_e8ve0l_w?si=0D89f2xhoeQ8kaGb&t=38" }, 		//130AMCT Artist Slot A
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 		//2AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 		//230AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" }, 		//3AMCT Event Ended
{ url: "https://raw.githubusercontent.com/fterasu/expo.github.io/refs/heads/main/Placeholder/ended.png", link: "https://youtu.be/_WZCvQ5J3pk?si=ofPX0qN9iMupDDP6&t=34" },		//330AMCT Event Ended
// Add up to 36
];

  function updateImage() {
    const index = getDynamicIndex(images_DynamicA);
    const imgData = images_DynamicA[index];
    const container = document.getElementById('dynamicImageContainerA');
    container.innerHTML = `<a href="${imgData.link}" target="_blank">
      <img src="${imgData.url}" alt="Dynamic Image" style="width: 100%; max-width: 840px;">
    </a>`;
  }

  setInterval(updateImage, 300000); // every 5 min
  updateImage();
})();