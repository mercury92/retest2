let checkPrime = () => {
    let n = prompt('input number');
    let result = []
    for (i = 2; i <= n; i++) {
        let notPrime
        for (j = 2; j <= n; j++) {
            if (i % j == 0 && i!==j) {
                notPrime = 1
            }
        }
        if(!notPrime){
            result.push(i)
        }
    }
    return result
}
console.log(checkPrime())

