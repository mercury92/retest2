findDigit = () => {
    let sum = ""
    for ( i = 1; i < 4129980; i++ ) {
        sum+=i
    }  
    return sum.length
}

console.log(findDigit())