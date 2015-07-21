/*! clickEvent.js © yamoo9.net, 2015 */
var html = document.documentElement;

html.className = 'js';

/**
 * --------------------------------
 * 문서 로드 이후 초기화 업무 수행
 * --------------------------------
 */
// 문서에서 #wallpaper를 찾는다.
// 변수(Variable) 선언
var wallpaper = document.getElementById('wallpaper');
// console.log(wallpaper);

// 스타일을 설정한다. (화면 가득 이미지 채우기)
// wallpaper.style.height             = '100vh';
// wallpaper.style.backgroundImage    = 'url(images/wallpaper-01.jpg)';
// wallpaper.style.backgroundRepeat   = 'no-repeat';
// wallpaper.style.backgroundPosition = 'center top';
// wallpaper.style.backgroundSize     = 'cover';

// window.innerHeight // IE 9+
// document.documentElement.clientHeight
var viewportHeight = html.clientHeight;


// 사용자가 문서(document)를 클릭하면 뭔가를 수행.
// 사용자가 문서를 클릭하면 wallpaperInit 함수를 수행.
// document.onclick = wallpaperInit;

// 함수 실행
// wallpaperInit();

// 월페이퍼 초기화
function wallpaperInit() {
	// console.log('document clicked');
	wallpaper.style.cssText = 'height: ' + viewportHeight + 'px; background: url(images/wallpaper-01.jpg) no-repeat center top; background-size: cover;';
	return false;
};
/*! clickEvent.js © yamoo9.net, 2015 */
var html = document.documentElement;

html.className = 'js';

/**
 * --------------------------------
 * 문서 로드 이후 초기화 업무 수행
 * --------------------------------
 */
// 문서에서 #wallpaper를 찾는다.
// 변수(Variable) 선언
var wallpaper = document.getElementById('wallpaper');
// console.log(wallpaper);

// 스타일을 설정한다. (화면 가득 이미지 채우기)
// wallpaper.style.height             = '100vh';
// wallpaper.style.backgroundImage    = 'url(images/wallpaper-01.jpg)';
// wallpaper.style.backgroundRepeat   = 'no-repeat';
// wallpaper.style.backgroundPosition = 'center top';
// wallpaper.style.backgroundSize     = 'cover';

// window.innerHeight // IE 9+
// document.documentElement.clientHeight
var viewportHeight = html.clientHeight;


// 사용자가 문서(document)를 클릭하면 뭔가를 수행.
// 사용자가 문서를 클릭하면 wallpaperInit 함수를 수행.
// document.onclick = wallpaperInit;

// 함수 실행
// wallpaperInit();

// 월페이퍼 초기화
function wallpaperInit() {
	// console.log('document clicked');
	wallpaper.style.cssText = 'height: ' + viewportHeight + 'px; background: url(images/wallpaper-01.jpg) no-repeat center top; background-size: cover;';
	return false;
};

/*var controller = document.getElementsByClassName('controller')[0];*/
/*var controller_btns = controller.getElementsByTagName('a');*/

/*var controller = document.querySelector('.controller');
var controller_btns = controller.querySelectorAll('a');*/

var controller = document.querySelector('.controller');
var controller_btns = document.querySelectorAll('.controller [role]');

// console.log(controller_btns);

function checkKindOfDevice() {
	var device_width = document.documentElement.clientWidth;

	if(device_width <768){
		html.className += ' mobile';
	}
	if(device_width >= 768 && device_width < 1200){
		html.className += ' tablet';
	}
	if(device_width >= 1200 && device_width < 1900){
		html.className += ' desktop';
	}
	if(device_width >= 1900){
		html.className += ' wide_tv';
	}
}

var isUserPlatform = navigator.platform.toLowerCase();
if(isUserPlatform.indexOf('mac') > -1){
	html.className = 'mac';
}
if(isUserPlatform.indexOf('win') > -1){
	html.className = 'win';
}

window.onload = window.onresize = checkKindOfDevice();

controller_btns[0].onclick = function() {
	//console.log(this.firstChild.nodeValue);
	wallpaper.style.cssText = 'background: url(images/wallpaper-01.jpg)';
	var activeEl = controller.querySelector(".on");
	activeEl.className = '';
	this.className = 'on';
	return false;
}

controller_btns[1].onclick = function() {
	//console.log(this.firstChild.nodeValue);
	wallpaper.style.cssText = 'background: url(images/wallpaper-02.jpg)';
	var activeEl = controller.querySelector(".on");
	activeEl.className = '';
	this.className = 'on';
	return false;
}

controller_btns[2].onclick = function() {
	//console.log(this.firstChild.nodeValue);
	wallpaper.style.cssText = 'background: url(images/wallpaper-03.jpg)';
	var activeEl = controller.querySelector(".on");
	activeEl.className = '';
	this.className = 'on';
	return false;
}

controller_btns[3].onclick = function() {
	//console.log(this.firstChild.nodeValue);
	wallpaper.style.cssText = 'background: url(images/wallpaper-04.jpg)';
	var activeEl = controller.querySelector(".on");
	activeEl.className = '';
	this.className = 'on';
	return false;
}

controller_btns[4].onclick = function() {
	//console.log(this.firstChild.nodeValue);
	wallpaper.style.cssText = 'background: url(images/wallpaper-05.jpg)';
	var activeEl = controller.querySelector(".on");
	activeEl.className = '';
	this.className = 'on';
	return false;
}