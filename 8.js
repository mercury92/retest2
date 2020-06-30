const findLCM = (n) => {
    let sum
    let c = 10
    let divisible = 0
    const max = Math.max.apply(Math, n)

    for (i = max; i < 500; i++) {
        divisible = 0
        for (j = 0; j < n.length; j++) {
            if ( i%n[j]  === 0) {
                divisible += 1
            }
        }
        if (divisible === n.length) {
            sum = i
            break;
        }
    }
    
    return sum
}

console.log(findLCM([2,3,5,7]))