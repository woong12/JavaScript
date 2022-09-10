// const playerName = "kkk";
// const playerPoints = 121212;
// const playerHandsome = true;
// const playerFat = "little bit";

// player.name
// player.points
// player.handsome

//player[0] == name
//player[1] == points
// const plyer = ["kkk", 121212, false, "little bit"];
//      ∨
//      ∨
//      ∨
//** Objects **
const player = {
    name: "kkk",
    points: 10,
    fat: true,
};

console.log(player["name"]);
console.log(player.name);

//const여도
//object안의 값은 수정 가능
console.log(player);
player.fat = false;
console.log(player);

//object에 값을 추가 가능
console.log(player);
player.lastName = "potato";
player.points = 15;
console.log(player);

//더하기
player.points = player.points + 15;
console.log(player.points);
