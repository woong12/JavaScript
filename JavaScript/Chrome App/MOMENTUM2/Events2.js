const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    //커서 올려놓으면 Mouse is here!상태
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    //커서 때면 Mouse is gone! 상태
    h1.innerText = "Mouse is gone!";
}

//배경색 변경
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

//복사했을때
function handleWindowCopy() {
    alert("copier!");
}

//와이파이 연결 해제됐을때
function handleWindowOffline() {
    alert("SOS no WIFI");
}

//와이파이 연결됐을때
function handleWindowOnline() {
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//==
// h1.onclick = handleTitleClick;
// h1.onclick = handleMouseEnter;
// h1.onclick = handleMouseLeave;

/*
title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

document에서 body,head,title 은 중요해서 언제든
ex) document.body 로 가져올수있지만
div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
ex) document.querySelector(“h1”);

window는 기본제공

*/

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
