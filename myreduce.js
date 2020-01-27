const myReduce = (arr, callback, initialValue) => {
    let accumulator;
    let currentIndex;
    if (typeof initialValue === "undefined") {
        accumulator = arr[0];
        currentIndex = 1;
    } else {
        accumulator = initialValue;
        currentIndex = 0;
    }
    for (currentIndex; currentIndex < arr.length; currentIndex++) {
        const currentValue = arr[currentIndex];
        accumulator = callback(accumulator, currentValue);
    }
    return accumulator;
};

// const arr = [3];

// const sum = arr.reduce((acc, cur) => {
//     return acc + cur
// }, 10);

// console.log(sum);

// const my = myReduce(arr, (acc = 0, cur = 0) => {
//     return acc + cur
// });

// console.log(my);

// const flattened = myReduce([
//         [0, 1],
//         [2, 3],
//         [4, 5]
//     ],
//     function (accumulator, currentValue) {
//         return accumulator.concat(currentValue);
//     },
//     []
// );

// console.log(flattened);

// const countedNames = myReduce(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'], function (allNames, name) {
//     if (name in allNames) {
//         allNames[name]++;
//     } else {
//         allNames[name] = 1;
//     }
//     return allNames;
// }, {});

// console.log(countedNames);
