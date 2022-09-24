//alert, prompt, confirm

// const userName = prompt("이름을 입력하세요.", "가나다");
// //prompt = 입력받기
// // alert("환영합니다, " + userName + "님");
// alert(`안녕하세요, ${userName}님. 환영합니다.`);

// console.log(userName);

// const isAdult = confirm("당신은 성인입니까?");

// console.log(isAdult);

// alert() = 메시지를 보여줌 확인을 누르면 닫힘

// prompt() = 메시지를 보여주고 값을 입력받을 필드를 보여줌 / 취소를 넣으면 null, 두번째 인수를 넣어주면 default값을 제공

// confirm() = 사용자에게 확인을 받기 위한 용도 true, false

//________________________________________________________________________________________

//형변환

// const mathScore = prompt("수학 점수?");
// const engScore = prompt("영어 점수?");

const mathScore = 90;
const engScore = 80;
const result = (mathScore + engScore) / 2;

console.log(result);
