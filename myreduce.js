const myReduce = (arr, callback, initialValue) => {
    //여기에 구현
    callback.forEach(element => {
        console.log(element);
    });
}

console.log(myReduce(1,[2,3],3));
// const result = myReduce(arr, (next, prev) => {
//     ...
// }, []);