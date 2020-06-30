const findGDC = (n) => {
    let sum
    let c = 10
    let divisible = 0
    const max = Math.max.apply(Math, n)

    for (i = 2; i < max; i++) {
        divisible = 0
        for (j = 0; j < n.length; j++) {
            if (n[j] % i == 0) {
                divisible += 1
            }
            if (divisible == n.length) {
                sum = i
            }
        }
    }

    return sum
}

console.log(findGDC([12,18]))