// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");

// console.log(title);

const title = document.querySelector(".hello h1");

title.innerText = "Hello";

console.log(title);

/*
getElementById >> 하나의 값
getElementsByClassName >> 배열
getElementsByTagName . . . >> 배열

위에서 id 빼고는 배열을 가져오기 때문에 title.innerText 와 같은 방법은 사용할 수 없다.
또
Grab me3
처럼 Id를 가진 태그의 하위 태그를 선택하고 싶을 때 위의 방법으로는 한계가 있다.
이때 사용하는 게 querySelector/querySelectorAll

const title = document.querySelector(".hellos h1"); 와 같이 쓰면
.hellos h1 마치 css 선택자 처럼 원하는 요소를 선택 가능
console.log((title.innerText = "히힛")); 화면에 글자가 히힛으로 바뀐다

** 단 hello라는 class를 가진 h1태그가 여러개인 경우 querySelectorAll을 써야 한다.
선택자가 id인 경우엔 #hello
만약 요소를 특정하지 않고 선택자만 쓰는 경우
>> const title = document.querySelector(".hellos");


Grab me3

hello

라고 써도 grab me3와 hello 모두 선택됨
그리고 여기서 만약 업데이트를 하면
>>console.log((title.innerText = "히힛"));
>> 결과는 grab me3, hello 둘 다 사라지고 히힛으로 대체된다.
*/
