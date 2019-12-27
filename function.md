# 자바스크립트 함수

## 코드

~~~JavaScript
// 에러 체크. Rest Parameter를 사용해 매개변수의 type을 체크한다.
const checkError = (...arg) => {
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] != "number") {
            console.log("error");
            return false;
        }
    }
    return true;
}
// 원의 넓이
const calcEllipseS = r => {
    if (checkError(r)) return Math.PI * r * r;
    else return;
}
// 사각형의 넓이
const calcRectS = (a, b) => {
    if (checkError(a, b)) return a * b;
    else return;
}
// 사다리꼴의 넓이
const calcTrapezoidS = (a, b, h) => {
    if (checkError(a, b, h)) return 0.5 * (a + b) * h;
    else return;
}
// 원기둥의 넓이
const calcCylinderS = (r, h) => {
    if (checkError(r, h)) return (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
    else return;
}
~~~

## Default Parameter / Rest Parameter

~~~JavaScript
function sum(x = 0, y = 0) {
  return x + y;
}
~~~

매개변수 기본값(Default Parameter) : 인수가 전달되지 않았을 경우 매개변수의 기본값을 설정할 수 있다.

~~~JavaScript
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);
~~~

나머지 매개변수(Rest Parameter) : 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다. Rest 파라미터는 함수에 전달된 인수들의 목록을 `배열`로 전달받는다.

## Call by Value / Call by Reference

값 자체를 전달 / 해당 값이 들어있는 주소값을 전달

## 참고 링크

[MDN arguments 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)  
[MDN Hoisting](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)  
[Extended Parameter](https://poiemaweb.com/es6-extended-parameter-handling)  
[Call by value](https://blueshw.github.io/2018/09/15/pass-by-reference/)  
