let n = 100
let result
let findPrime = () => {
    for (i = 2; i < n; i++) {
        let prime = ''
        for (j = 2; j < n; j++) {
            if (i % j == 0 && i !== j) {
                prime = 1
                break;
            }
        }
        if (prime == '') {
            result += i
        }

    }
    return result
}
console.log(findPrime())