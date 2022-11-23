
window.sr = ScrollReveal({ reset: true });

//左から出現

var pattern001 = {
	origin: 'left',
	distance: '0px',
	scale: 0.5,
	rotate: { x: 0, y: 0, z: 0 },
	duration: 1200,
	delay :200,
};
sr.reveal('.amleft', pattern001, 100);


//右から出現

var pattern002 = {
	origin: 'right',
	distance: '150px',
	scale: 1,
	rotate: { x: 0, y: 0, z: 0 },
	duration: 1800,
	delay :100,
};
sr.reveal('.amright', pattern002, 100);

// クラス変更
window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

//safari対策
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};