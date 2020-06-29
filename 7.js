const findGDC = (n) => {
    let sum = []
    let c = 10
    let divisible
    let noDivisible = []
    const max = Math.max.apply(Math, n)

    for (i = n.length - 1; i >= 0; i--) {
        for (j = 2; j < max; j++) {
            divisible = ''
            if (n[i] % j !== 0) {
                divisible = 1
                noDivisible = j
            }
            if (divisible !== 1) {
                sum = sum+j
            }
        }
    }
    return sum
}

console.log(findGDC([6, 8, 16]))