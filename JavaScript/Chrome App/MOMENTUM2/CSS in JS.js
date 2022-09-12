const h1 = document.querySelector("div.hello:first-child h1");

function handleMTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    // console.log(h1.style.color);
    // h1.style.color = "blue";
    // console.log(h1.style.color);

    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

/*
1) click event 발생 및 함수 실행
2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
3) newColor 변수 선언
4) currentColor 현재 값 확인
5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
6) 마지막으로 h1.style.color에 newColor값 대입 (setter)
*/

h1.addEventListener("click", handleMTitleClick);
