const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

//선
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.stroke();
//사각형
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
