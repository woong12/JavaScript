const title = document.querySelector(".hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    //커서 올려놓으면 Mouse is here!상태
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    //커서 때면 Mouse is gone! 상태
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
