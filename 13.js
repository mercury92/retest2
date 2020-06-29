findDigit = () => {
    let n;
    let num = [];
    let sum;
    let Sum = 0;
    while(n!==''){
    n = prompt("enter number")
    if(n=="false"){
            num = num.join("")
        for(i=0;i<num.length;i++) {      
            sum = num.slice(i,i+1)
            sum = Number(sum)
            Sum = Sum+sum

       }
        break;
    }
    num.push(n)
   
    }
    return Sum
}

console.log(findDigit())