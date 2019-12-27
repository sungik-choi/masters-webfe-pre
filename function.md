# 자바스크립트 함수

[MDN arguments 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)

[MDN Hoisting](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)

~~~JavaScript

const checkError = (...arg) => {
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] != "number") {
            console.log("error");
            return false;
        }
    }
    return true;
}

const calcEllipseS = r => {
    if (checkError(r)) return Math.PI * r * r;
    else return;
}

const calcRectS = (a, b) => {
    if (checkError(a, b)) return a * b;
    else return;
}

const calcTrapezoidS = (a, b, h) => {
    if (checkError(a, b, h)) return 0.5 * (a + b) * h;
    else return;
}

const calcCylinderS = (r, h) => {
    if (checkError(r, h)) return (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
    else return;
}

~~~
