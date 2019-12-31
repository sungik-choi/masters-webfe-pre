const myReduce = (arr, callback, initialValue) => {
    //여기에 구현
    if(typeof callback !== "function") throw new TypeError("callback must be a function");
    console.log(callback);
}

myReduce(1,2,function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
},3);
// const result = myReduce(arr, (next, prev) => {
//     ...
// }, []);