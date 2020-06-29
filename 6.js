sumPrime = () => {
    let n = 101
    let sum = 1
    let number
    for (i = 2; i <= n; i++) {
        for (j = 2; j <= n; j++) {
            number = i
            number = number * -1
            if (i % j == 0 && i !== j) {
                number = number * -1
                break;
            }
        }
        sum = sum + number
    }
    return sum
}
console.log(sumPrime())