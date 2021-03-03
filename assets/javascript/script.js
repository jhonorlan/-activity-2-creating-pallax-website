const BALLOON = document.querySelector(".hot-air-balloon");

let LAYER = 0;

function animate() {
	const SCROLLHEIGHT = document.documentElement.scrollHeight;
	const SCROLLTOP = document.documentElement.scrollTop;
	const PERCENT = (SCROLLTOP / SCROLLHEIGHT) * 100;
	const MARGIN = (BALLOON.clientHeight / SCROLLHEIGHT) * 100;
	BALLOON.style.top = `${PERCENT / 2.05}%`;
}

addEventListener("scroll", animate);
