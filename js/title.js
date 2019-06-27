function loaded() {
	setInterval(loop, 500)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
	loaded()
}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
	loaded()
});
var x = 0,
	titleText = ["$", "lança", "o", "bigode", "f", "i", "n", "i", "n", " ", "joga", "o", "dinheiro", "na", "b", "i", "h"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}
