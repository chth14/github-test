/*! index.js © yamoo9.net, 2015 */

//  <html> 요소를 DOM 방식으로 접근하는 방법
var html = document.documentElement;
var head = html.head;
var body = html.body;

console.log(head, body);

// <html> 요소의 클래스 속성 값으로 'hello~'를 추가하는 방법
html.classList.add('hello~');

/*var app = document.getElementById('app');

console.log(app);

window.onload = function () {
	console.log('문서의 모든 내용이 다운로드 완료');
}

console.log('즉시 실행');
*/

var body = document.body;

body.style.backgroundColor = 'red';
