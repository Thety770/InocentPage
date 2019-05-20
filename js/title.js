function loaded() {
	setInterval(loop, 500)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
	loaded()
}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
	loaded()
});
var x = 0,
	titleText = ["$", "c|", "ca", "cat|", "cat l", "cat lo|", "cat lov", "cat love|", "cat love.", "cat love.t|", "cat love.tx", "cat love.txt|", "no such file or directory", "no such file or directory"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}
