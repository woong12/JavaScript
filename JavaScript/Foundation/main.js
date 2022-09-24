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
//o/p = 4540
// prompt 입력 =  문자형
// 90 + 80 = 9080 / 2= 4540
// 나누기는 자동 형변환 때문에 재대로 작동

// const mathScore = 90;
// const engScore = 80;
// //o/p = 85

// const result = (mathScore + engScore) / 2;

// console.log(result);

// 명시적 형변환

// String() = 문자형으로 변환

// Number() = 숫자형으로 변환

// Boolean() = 불린형으로 변환

//________________________________________________________________________________________

// console.log(10 === 5);
// console.log(10 == 5);

// const a = 1;
// const b = "1";

// console.log(a == b);
// console.log(a === b); //일치 연산자
// // ===는 타입까지 비교
// // ==보다 ===을 쓰는게 좋음
