(function(){
  // Unique namespace: _dynamicTextA

  const texts_dynamicTextA = [
 	{ text: "Pre-Event",	link: "https://example.com/1" },	//12PMCT Artist Slot A
 	{ text: "Pre-Event",	link: "https://example.com/1" },	//1230PMCT Artist Slot A
    { text: "Tsunamikai", 	link: "https://example.com/1" }, 	//1PMCT Starting Soon
    { text: "Tsunamikai", 	link: "https://example.com/1" }, 	//130PMCT Starting Soon
    { text: "Tsunamikai", 	link: "https://example.com/1" },	//2PMCT Artist Slot A
	{ text: "Tsunamikai", 	link: "https://example.com/1" }, 	//230PMCT Artist Slot A
    { text: "Lorilae", 		link: "https://example.com/1" }, 	//3PMCT Artist Slot A
    { text: "Lorilae", 		link: "https://example.com/1" }, 	//330PMCT Artist Slot A
    { text: "Lorilae", 		link: "https://example.com/1" }, 	//4PMCT Starting Soon
    { text: "Lorilae", 		link: "https://example.com/1" }, 	//430PMCT Starting Soon
    { text: "Break Slot", 	link: "https://example.com/1" }, 	//5PMCT Artist Slot A
	{ text: "Baz", 			link: "https://example.com/1" }, 	//530PMCT Artist Slot A
    { text: "Baz", 			link: "https://example.com/1" }, 	//6PMCT Artist Slot A
    { text: "Baz", 			link: "https://example.com/1" }, 	//630PMCT Artist Slot A
    { text: "Baz", 			link: "https://example.com/1" }, 	//7PMCT Starting Soon
    { text: "Sunthrone", 	link: "https://example.com/1" }, 	//730PMCT Starting Soon
    { text: "Sunthrone", 	link: "https://example.com/1" }, 	//8PMCT Artist Slot A
	{ text: "Sunthrone", 	link: "https://example.com/1" }, 	//830PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/1" },	//9PMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/1" },	//930PMCT Starting Soon
	{ text: "Break Slot",	link: "https://example.com/1" },	//10PMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/1" },	//1030PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/1" },	//11PMCT Artist Slot A
	{ text: "Break Slot", 	link: "https://example.com/1" },	//1130PMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/1" },	//12AMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/1" },    //1230AMCT Starting Soon
	{ text: "Break Slot", 	link: "https://example.com/1" },    //1AMCT Artist Slot A
	{ text: "Break Slot",	link: "https://example.com/1" },    //130AMCT Artist Slot A
    { text: "Event End", 	link: "https://example.com/1" },    //2AMCT Artist Slot A
    { text: "Event End",  	link: "https://example.com/1" },    //230AMCT Artist Slot A
    { text: "Event End",  	link: "https://example.com/1" },	//3AMCT Starting Soon
    { text: "Event End",  	link: "https://example.com/1" },    //330AMCT Starting Soon
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
      return texts_dynamicTextA.length - 1;
    }

    let minutesSinceStart;
    if (now.getHours() >= 12) {
      minutesSinceStart = currentMinutes - startMinutes;
    } else {
      // After midnight but before 3AM
      minutesSinceStart = (24 * 60 - startMinutes) + currentMinutes;
    }

    if (minutesSinceStart >= totalActiveMinutes) {
      return texts_dynamicTextA.length - 1;
    }

    return Math.floor(minutesSinceStart / 30) % texts_dynamicTextA.length;
  }

  function showDynamicTextA() {
    const textContainer = document.getElementById("dynamicTextContainerA");
    if (!textContainer) return;

    const index = getIndex();

    if (index === null || !texts_dynamicTextA[index]) {
      textContainer.innerHTML = '';
      return;
    }

    const entry = texts_dynamicTextA[index];

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

  showDynamicTextA(); // Run on load
})();