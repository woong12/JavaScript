//국어, 영어, 수학, 과학 점수
let student = [90, 70, 80, 60];

console.log(student[0]); //국어 점수
console.log(student[1]); //영어 점수
console.log(student[2]); //수학 점수
console.log(student[3]); //과학 점수

//object >>

let student1 = {
    KoreanScore: 90,
    englishScore: 70,
    mathScore: 80,
    scienceScore: 60,
    "social Score": 50, //문자열로도 가능, 문자열로 작성하면 띄어쓰기 가능
};

//대괄호 연산자
console.log(student1["KoreanScore"]);

//점 연산자
console.log(student1.englishScore); //띄어쓰기가 있으면 점연산자로 불가능
