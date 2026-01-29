function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i=2; i <=num; i++) {
        if (num % i === 0 && i !== num) {
            return false;
        }
    }
    return true;
}
console.log();
