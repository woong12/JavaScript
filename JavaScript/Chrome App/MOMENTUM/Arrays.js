// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfweek1 = mon + tue + wed + thu + fri + sat + sun;
//-->
const daysOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// const nonsense = [1, 2, "hello", false, null, true, undefined, "woong"];

//Get Item from Array
console.log(daysOfweek[5]);
//[n] = 배열 안의 n번째 값 가져오기

console.log(daysOfweek);

//Add one more day to the array
daysOfweek.push("sun");

console.log(daysOfweek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(toBuy[2]);
