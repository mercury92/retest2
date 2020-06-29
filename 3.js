(function() {
    let n = prompt('input number');
    let number= n*n
    let result = []

    for (i = 2; i <= number; i++) {
        let notPrime
        for (j = 2; j <= number; j++) {
            if (i % j == 0 && i !== j) {
                notPrime = 1
            }
        }
        if (!notPrime) {
            result.push(i)
        }
    }
    while(result.length>number/n){
        result.pop()
    }
    console.log(result)
    return result
}
)
()
