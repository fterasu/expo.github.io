(function(){
  // Unique namespace: _dynamicTextE

  const texts_dynamicTextE = [
 	{ text: "Pre-Event",	link: "https://example.com/5" },	//12PMCT Artist Slot A
 	{ text: "Pre-Event",	link: "https://example.com/5" },	//1230PMCT Artist Slot A
    { text: "Otherbuttons", link: "https://example.com/5" }, 	//1PMCT Starting Soon
    { text: "Otherbuttons", link: "https://example.com/5" }, 	//130PMCT Starting Soon
    { text: "Otherbuttons", link: "https://example.com/5" },	//2PMCT Artist Slot A
	{ text: "Otherbuttons", link: "https://example.com/5" }, 	//230PMCT Artist Slot A
    { text: "Sussis", 		link: "https://example.com/5" }, 	//3PMCT Artist Slot A
    { text: "Sussis", 		link: "https://example.com/5" }, 	//330PMCT Artist Slot A
    { text: "Sussis", 		link: "https://example.com/5" }, 	//4PMCT Starting Soon
    { text: "Sussis", 		link: "https://example.com/5" }, 	//430PMCT Starting Soon
    { text: "Break Slot", 	link: "https://example.com/5" }, 	//5PMCT Artist Slot A
	{ text: "Flare", 		link: "https://example.com/5" }, 	//530PMCT Artist Slot A
    { text: "Flare", 		link: "https://example.com/5" }, 	//6PMCT Artist Slot A
    { text: "Flare", 		link: "https://example.com/5" }, 	//630PMCT Artist Slot A
    { text: "Flare", 		link: "https://example.com/5" }, 	//7PMCT Starting Soon
    { text: "Shavostars", 	link: "https://example.com/5" }, 	//730PMCT Starting Soon
    { text: "Shavostars", 	link: "https://example.com/5" }, 	//8PMCT Artist Slot A
	{ text: "Shavostars", 	link: "https://example.com/5" }, 	//830PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/5" },	//9PMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/5" },	//930PMCT Starting Soon
	{ text: "Break Slot",	link: "https://example.com/5" },	//10PMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/5" },	//1030PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/5" },	//11PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/5" },	//1130PMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/5" },	//12AMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/5" },    //1230AMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/5" },    //1AMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/5" },    //130AMCT Artist Slot A
    { text: "Event End", 	link: "https://example.com/5" },    //2AMCT Artist Slot A
    { text: "Event End",  	link: "https://example.com/5" },    //230AMCT Artist Slot A
    { text: "Event End",  	link: "https://example.com/5" },	//3AMCT Starting Soon
    { text: "Event End",  	link: "https://example.com/5" },    //330AMCT Starting Soon
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
      return texts_dynamicTextE.length - 1;
    }

    let minutesSinceStart;
    if (now.getHours() >= 12) {
      minutesSinceStart = currentMinutes - startMinutes;
    } else {
      // After midnight but before 3AM
      minutesSinceStart = (24 * 60 - startMinutes) + currentMinutes;
    }

    if (minutesSinceStart >= totalActiveMinutes) {
      return texts_dynamicTextE.length - 1;
    }

    return Math.floor(minutesSinceStart / 30) % texts_dynamicTextE.length;
  }

  function showdynamicTextE() {
    const textContainer = document.getElementById("dynamicTextContainerE");
    if (!textContainer) return;

    const index = getIndex();

    if (index === null || !texts_dynamicTextE[index]) {
      textContainer.innerHTML = '';
      return;
    }

    const entry = texts_dynamicTextE[index];

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

  showdynamicTextE(); // Run on load
})();
