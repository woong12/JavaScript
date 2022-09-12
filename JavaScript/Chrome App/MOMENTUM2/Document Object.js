document.title = "Hello! From JS!";

/*
js는 document object를 통해 html과 상호작용 할 수 있음.
ex) document.title = "hello" 를 하면 타이틀이 hello로 바뀜.
*/

document.getElementById("title");

const title = document.getElementById("title");

title.innerText("Got you!");

console.log(title.id);
console.log(title.className);
