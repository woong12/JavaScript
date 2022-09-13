const clock = document.querySelector("h2#clock");

// function sayHello() {
//     //5초마다 hello 출력
//     console.log("hello");
// }

// setInterval(sayHello, 5000);

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //00:00:00이 출력되지 않게 즉시 호출
setInterval(getClock, 1000);
