var rootElement = document.documentElement;

var app = document.getElementById('app');
// console.log(rootElement, app);

var app_first = app.firstChild;
// console.log(app.nodeType, app_first.nodeType);

var articles = app.getElementsByTagName('article');
// console.log(articles);

var article0 = app.getElementsByTagName('article')[0];
// console.log(article0);

var posts = app.getElementsByClassName('post'); // IE9이상만 지원 가능
// console.log(posts);

var target = article0.getElementsByClassName('target');
//console.log('target555 = ', target555[0].firstChild.nodeValue);
//console.log(target);

target = article0.getElementsByClassName('target')[0];
//console.log(target);

//target = tartget.nodeValue;
//console.log(target);

second_target = posts[1].getElementsByClassName('target')[0];
// console.log(second_target);

target.onmouseenter = function() {
	this.className = 'first-target';
}

second_target.onclick = function() {
	this.style.cssText = 'background-color:#FE4940; color:white;'
/*	this.style.backgroundColor = '#FE4940';
	this.style.color = 'white';*/
}


