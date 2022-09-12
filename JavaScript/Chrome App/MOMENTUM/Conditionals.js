const age = parseInt(prompt("How old are you?"));

// console.log(age, parseInt);
// console.log(typeof age);

// console.log(isNaN(age));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive niumber");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can do whatever you wnat");
}

/*
prompt는 사용자에게 창을 띄울 수 있도록 하는 역할
typeof 는 변수의 type을 보는 방법이다.
ParseInt() 는 string을 number 로 변환하는 역할
NaN = not a number


const age = prompt(“How old are you?”);
console.log(typeof “15”, typeof paseInt(“15”));
= string, number
number 은 크기 비교가 가능하다. string 은 불가능


const age= parseInt(prompt (“How old are you?”));
function은 내부에서 외부로 실행

실행하면 창에 빈칸이 나오고 거기에
숫자를 쓰면 parseInt가 숫자로 인식하게 바꾼다.
string을 쓰면 NaN이 뜬다.
*/

/*
isNaN 은 무언가가 NaN인지 판별하는 방법
const age= parseInt(prompt (“How old are you?”));
console.log(isNaN(age));
숫자입력하면 false
글자입력하면 ture

if(condition){
실행코드=true ---실행
실행코드=false ----다음 else 값 실행
} else{

}
condition은 boolean으로 판별가능해야 한다, (true , false)


if(isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}
*/
