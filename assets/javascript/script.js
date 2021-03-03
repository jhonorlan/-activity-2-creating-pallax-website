const BALLOON = document.querySelector(".hot-air-balloon");
BALLOON.style.left = `40%`;
let lastScrollTop = 0;

function animate() {
	const SCROLLHEIGHT = document.documentElement.scrollHeight;
	const SCROLLTOP = document.documentElement.scrollTop;
	const PERCENT = (SCROLLTOP / SCROLLHEIGHT) * 100;
	const per = parseInt(BALLOON.style.left);
	BALLOON.style.top = `${PERCENT / 2.05}%`;

	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	if (st > lastScrollTop) {
		// downscroll code

		console.log("down");
	} else {
		// upscroll code
		console.log("up");
	}

	lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

addEventListener("scroll", animate);
