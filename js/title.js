    	function loaded() {
		setInterval(loop, 500)
		}
		document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
		loaded()
		}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
		loaded()
		});
		var x = 0,
		titleText = ["$", "I|", "In", "Ino|", "Inoc", "Inoce|", "Inocen", "Inocent|", "I ", "Is|", "T", "Th|", "The", "B|", "Be", "Bes|", "Best"];

		function loop() {
		document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
        }
