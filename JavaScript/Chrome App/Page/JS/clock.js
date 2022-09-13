const clock = document.querySelector("h2#clock");

// function sayHello() {
//     //5초마다 hello 출력
//     console.log("hello");
// }

// setInterval(sayHello, 5000);

function getClock() {
    const date = new Date();
    //초의 자릿수가 1일때 앞에 0을 붙여주는 코드
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //00:00:00이 출력되지 않게 시간을 즉시 호출
setInterval(getClock, 1000);
