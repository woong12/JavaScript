const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

//그리기
let isPainting = false;
function onMove(event) {
    if (isPainting) {
        //isPainting이 참이라면 선을그리고 함수를 끝냄, 거짓이라면 브러쉬만 움직임
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    //클릭하면 참
    isPainting = true;
}
function cancelPainting() {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

//---------------------------------------------------------------------------------------
//무지개 선 그리기 2
// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
// ];

// ctx.linewidth = 2;
// let x_coord = 0;
// let y_coord = 0;
// function onclick(event) {
//     ctx.beginPath();
//     ctx.moveTo(x_coord, y_coord);
//     ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// // If user lick the mouse, save the mouse point and make a circle.
// function cursor_move(event) {
//     x_coord = event.offsetX;
//     y_coord = event.offsetY;
//     ctx.beginPath();
//     ctx.arc(x_coord, y_coord, 5, 0, 2 * Math.PI);
//     ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
//     ctx.fill();
//     console.log("d");
// }
// canvas.addEventListener("mousemove", onclick);
// canvas.addEventListener("click", cursor_move);
//---------------------------------------------------------------------------------------
//무지개 선 그리기
// ctx.lineWidth = 2;
// ctx.moveTo(0, 0);

// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff",
// ];

// function onClick(event) {
//     ctx.beginPath();
//     ctx.moveTo(400, 400);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick);
//---------------------------------------------------------------------------------------
//사람 그리기
// ctx.fillRect(210 - 40, 200 - 10, 15, 100);
// ctx.fillRect(350 - 40, 200 - 10, 15, 100);
// ctx.fillRect(260 - 40, 200 - 10, 60, 200);

// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(270, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(230, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill();
//---------------------------------------------------------------------------------------
//집 그리기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200); //원점으로 돌아가기
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();
//---------------------------------------------------------------------------------------
//선 그리기
// ctx.moveTo(50, 50); //x, y
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill(); //채우기
// ctx.stroke();
//---------------------------------------------------------------------------------------
//사각형 그리기
// ctx.rect(50, 50, 100, 100);
// ctx.fill();
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath(); //새로 시작
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();
// setTimeout(() => {
//     ctx.fill();
// }, 5000);
