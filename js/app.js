const start = moment('2022-02-24');
const counter = document.getElementById('counter');
counter.innerHTML = moment().diff(start, 'days') + 1;

setInterval(function() {
	counter.innerHTML = moment().diff(start, 'days') + 1;
}, 600000);

const screenshotTarget = document.getElementById('screenshotTarget');
const ogImage = document.getElementById('ogImage');

html2canvas(screenshotTarget).then((canvas) => {
	const base64image = canvas.toDataURL("image/png");
	ogImage.setAttribute('content', base64image);
});