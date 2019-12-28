// Factorial

const factorial = n => {
    if (n === 1) return 1;
    else return n * factorial(n - 1);
}

console.log(factorial(5));

// Fibonacci

const fibonacci = n => {
    if (n < 2) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));