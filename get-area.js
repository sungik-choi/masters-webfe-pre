const dataStore = [];

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

const calcAllEllipse = (a, b) => {
    if (a === b) return calcEllipseS(b);
    else return calcEllipseS(a) + calcAllEllipse(a + 1, b);
}

const calcRectS = (a, b) => {
    if (checkError(a, b)) return a * b;
    else return;
}

const calcTrapezoidS = (a, b, h) => {
    if (checkError(a, b, h)) return 0.5 * (a + b) * h;
    else return;
}

const getArea = (str, a, b, h) => {
    switch (str) {
        case 'circle':
            dataStore.push('circle');
            if (typeof b === 'undefined') return calcEllipseS(a);
            else return calcAllEllipse(a, b);
            break;

        case 'rect':
            dataStore.push('rect');
            return calcRectS(a, b);
            break;

        case 'trapezoid':
            dataStore.push('trapezoid');
            return calcTrapezoidS(a, b, h);
            break;

        default:
            return "error";
            break;
    }
}

function printExecutionSequence() {
    console.log(dataStore);
}

getArea('circle', 2, 5);
getArea('rect', 1, 2);
getArea('circle', 1);
getArea('circle', 1);
getArea('trapezoid', 1, 2, 3);
printExecutionSequence();