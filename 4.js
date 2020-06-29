sumPrime = () => {
    let n = prompt('input number');
    let result =0
    for (i = 2; i <= n; i++) {
        let notPrime
        for (j = 2; j <= n; j++) {
            if (i % j == 0 && i !== j) {
                notPrime = 1
            }
        }
        if (!notPrime) {
            result =result+i
        }
    }
    return result
}
console.log(sumPrime())
