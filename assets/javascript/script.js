const BALLOON = document.querySelector(".hot-air-balloon");
BALLOON.style.left = `40%`;
let lastScrollTop = 0;

function animate() {
	const SCROLLHEIGHT = document.documentElement.scrollHeight;
	const SCROLLTOP = document.documentElement.scrollTop;
	const PERCENT = (SCROLLTOP / SCROLLHEIGHT) * 100;
	const per = parseInt(BALLOON.style.left);
	BALLOON.style.top = `${PERCENT / 2.05}%`;
}

addEventListener("scroll", animate);
