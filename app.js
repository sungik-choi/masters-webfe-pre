function main() {
    let a, b, c;
    a = 1;
    b = 2;
    c = 0;

    for (let i = 0; i < 10; i++) {
        a++;
        b *= 2;
        c = a + b;
    }

    return 0;
}

main();
