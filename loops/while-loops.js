
let digits = -258963147;

let countDigits = (n)=>{
    let count = 0;
    // Math.abs work for negative number to possitive number
    n = Math.abs(n);
    while(n > 0){
     n =  Math.floor(n/10);
    count++;
}
 return count;
}


let result = countDigits(digits)
console.log("result",result);