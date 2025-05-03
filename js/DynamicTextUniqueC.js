(function(){
  // Unique namespace: _dynamicTextC

  const texts_dynamicTextC = [
 	{ text: "Pre-Event",	link: "https://example.com/3" },	//12PMCT Artist Slot A
 	{ text: "Pre-Event",	link: "https://example.com/3" },	//1230PMCT Artist Slot A
    { text: "Slifer", 		link: "https://example.com/3" }, 	//1PMCT Starting Soon
    { text: "Slifer",  		link: "https://example.com/3" }, 	//130PMCT Starting Soon
    { text: "Slifer",  		link: "https://example.com/3" },	//2PMCT Artist Slot A
    { text: "Slifer",  		link: "https://example.com/3" }, 	//230PMCT Artist Slot A
    { text: "Diana", 		link: "https://example.com/3" }, 	//3PMCT Artist Slot A
    { text: "Diana", 		link: "https://example.com/3" }, 	//330PMCT Artist Slot A
    { text: "Diana", 		link: "https://example.com/3" }, 	//4PMCT Starting Soon
    { text: "Diana",	 	link: "https://example.com/3" }, 	//430PMCT Starting Soon
    { text: "Break Slot", 	link: "https://example.com/3" }, 	//5PMCT Artist Slot A
    { text: "Break Slot",	link: "https://example.com/3" }, 	//530PMCT Artist Slot A
    { text: "Break Slot", 	link: "https://example.com/3" }, 	//6PMCT Artist Slot A
    { text: "Break Slot", 	link: "https://example.com/3" }, 	//630PMCT Artist Slot A
    { text: "Bunny", 	 	link: "https://example.com/3" }, 	//7PMCT Starting Soon
    { text: "Bunny", 	 	link: "https://example.com/3" }, 	//730PMCT Starting Soon
    { text: "Bunny", 		link: "https://example.com/3" }, 	//8PMCT Artist Slot A
    { text: "Bunny", 		link: "https://example.com/3" }, 	//830PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/3" },	//9PMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/3" },	//930PMCT Starting Soon
	{ text: "Break Slot",	link: "https://example.com/3" },	//10PMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/3" },	//1030PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/3" },	//11PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/3" },	//1130PMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/3" },	//12AMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/3" },    //1230AMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/3" },    //1AMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/3" },    //130AMCT Artist Slot A
    { text: "Event End", 	link: "https://example.com/3" },    //2AMCT Artist Slot A
    { text: "Event End",  	link: "https://example.com/3" },    //230AMCT Artist Slot A
    { text: "Event End",  	link: "https://example.com/3" },	//3AMCT Starting Soon
    { text: "Event End",  	link: "https://example.com/3" },    //330AMCT Starting Soon
    // Add up to 36 entries
  ];

  function getCentralTime() {
    const nowUTC = new Date();
    const centralTimeString = nowUTC.toLocaleString('en-US', { timeZone: 'America/Chicago' });
    return new Date(centralTimeString);
  }

  function getIndex() {
    const now = getCentralTime();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const startMinutes = 12 * 60; // 12:00 PM
    const totalActiveMinutes = 15 * 60; // 12PM to 3AM = 900 minutes

    // If before 12PM, show last entry
    if (currentMinutes < startMinutes) {
      return texts_dynamicTextC.length - 1;
    }

    let minutesSinceStart;
    if (now.getHours() >= 12) {
      minutesSinceStart = currentMinutes - startMinutes;
    } else {
      // After midnight but before 3AM
      minutesSinceStart = (24 * 60 - startMinutes) + currentMinutes;
    }

    if (minutesSinceStart >= totalActiveMinutes) {
      return texts_dynamicTextC.length - 1;
    }

    return Math.floor(minutesSinceStart / 30) % texts_dynamicTextC.length;
  }

  function showdynamicTextC() {
    const textContainer = document.getElementById("dynamicTextContainerC");
    if (!textContainer) return;

    const index = getIndex();

    if (index === null || !texts_dynamicTextC[index]) {
      textContainer.innerHTML = '';
      return;
    }

    const entry = texts_dynamicTextC[index];

    textContainer.innerHTML = `
      <a href="${entry.link}" target="_blank"
         style="text-decoration: underline; color: white; font-family: 'Michroma', sans-serif; font-size: 24px;">
        ${entry.text}
      </a>
    `;
  }

  // Inject Michroma font
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Michroma&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  showdynamicTextC(); // Run on load
})();