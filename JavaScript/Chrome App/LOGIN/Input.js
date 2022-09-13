// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//==

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    // console.log("hello", loginInput.value);
    event.preventDefault();
    // const username = loginInput.value;
    // // 1
    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long.");
    // }

    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    // alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// loginButton.addEventListener("click", onLoginBtnClick);

/*
1111111111
모든 것은 HTML에서 시작되어야 함. HTML에서 작성하고 자바스크립트로 기능을 구현.
먼저, HTML 코드 작성하기
1. 사용자가 이름을 작성할 수 있도록 input 태그를 작성한다.

안에 텍스트를 넣을 거니까, type="text"해주고, 안에 미리 작성할 말은 placeholder 안에 써주기
2. 그리고 옆에 버튼을 만든다.
Log In
3. div태그로 위의 것들 묶어주고, id="login-form"을 해준다.
왜 div태그로 묶는지 확실히는 모르겠지만, 내 생각에는 둘을 묶은 다음, 저 id를 통해서
자바스크립트에서 내가 원하는 태그들을 쉽게 찾기 위해서 묶어주는 것 같음.

input 안에 뭔가를 작성하고 로그인 버튼을 누르면 저장해야 되니까
자바스크립트로 그 기능 구현하기

그냥 html 태그를 가져올 수 없으니까 변수 안에 넣고 거기서 텍스트 받기

1. const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

document 안에서 찾기. id="login-form"인 곳에서 input요소를 loginInput 안에 넣어주기

2. 버튼을 클릭하면, 내가 작성한 값을 콘솔에 보여주는 기능

loginButton.addEventListener("click, onLoginBtnClick);

3. 함수 만들기
function onLoginBtnClick(){
console.log(loginInput.value);
}

input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.
*/

/*
222222222222222
15.but form이 submit될때마다 새로고침이 되기때문에 이것은 우리가 원하는게 아니다. 그러한 문제 때문에 form이 submit 되는걸 막아줄것임
14.*규칙 form안에 input을 쓰고 엔터나 submit을 누르면 자동으로 제출됨. click이 필요없고 form을 submit하는것이 중요.->브라우저가 새로고침 하지 않고 user정보를 저장하도록 하고싶은것
13.12처럼 html요소에 submit을 넣었기때문에 더이상 addEventListner가 필요하지 않다. 입력후에 클릭이 아닌 엔터를 눌러도 form은 submit이 되기때문 *반드시 form안에 input을 넣어야함
12.html에가서 button을 없애고 input type을 submit value값에 login을넣는다
11.현재 필드값을 입력하지 않으면 요청이 들어오고 문자는 15자 이상을 쓸수 없게됨. 그리고 입력을하고 버튼을 누르면 새로고침이 실행되고 값이 사라짐.
10.if else 문은 선호하는 방식이 아니라서 지우고 html에 input 창에 requird를 적고 maxlength="15"를 적는다. if else 문 없에고 username에 대한 값을 console.log에 넣는다 
아직 username을 받는단걸 확인 하기 위해
9.username.length를 통해서 string의 길이를 구한다. > 15를 통해서 username의 길이가 15보다 길다면이라는 조건설정을 해준다.
8.문자를 입력하지 않았을때 please wirte your name 이라 하고 문자를 입력했는데 15글자를 넘어서면 안됨 그렇담 string의 길이를 어떻게 알 수 있을까? ->
7.console.log를 유저가 볼 수 있게 alert로 바꾸자
6.console.log("hello",loginInput.value)를 const value = loginInput.value로 변수에 할당 해준다. + if 문을 통해서 value값이 없을떄 다음과같이 행동.
5.username의 유효성 검사 뜻 -> 조건에 유효한지 검사 비어서도 안되고 너무 길어서도 안되는 문자를 만든다.
4.("hello",loginInput.value)를 통해서 (hello loginInput.value값을 얻는다) ->단 hello를 한후 값을 입력안하면 아무것도 뜨지 않음 이것을 if else를통해 해결해보자
3.클릭했을때 함수를 쓰고 loginInput에 대한 value값을 얻는다. value값이란 input창에 다다다다적으면 다다다다라는 값이 나옴. console.log(loginInput.value)
2.dir을 통해서 loginInput의 내부를 보여준다
1.클릭 이벤트를 통해서 클릭에 대한 작동이 됨
console.dir(loginInput) ->console.log(loginInput.value)

모르는 지식
태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시합니다.
required 속성이 제대로 동작하는 요소의 type 속성값은 다음과 같습니다.
- checkbox, date, email, file, number, password, pickers, radio, search, tel, text, url
required 속성은 불리언(boolean) 속성입니다.
불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true 값을 가지게 됩니다.
*/

/*
33333333333333

function onLoginSubmit(event){
event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
// event object는 preventDefault함수를 기본적으로 갖고 있음
console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit); 
// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

★ 중요 ★
form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다.
첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다.
ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음
*/

/*
444444444444
addEventListener 안에 있는 함수는 직접 실행하지 않는다
브라우저가 실행시켜주고
브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
addEventListener의 함수에서 object에 대한 자리만 할당해주면
해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!
*/
