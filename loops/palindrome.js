const palindromeChecker = (x) =>{
    let xCopy  = x;
    let revers = 0;
    while(x>0){
        let remaining = x % 10; // get the last number 
        revers = (10* revers) + remaining; // store the last number in revers veriable
        x = Math.floor(x/10) // replace with new value of x what was given by user

    }
    console.log(revers)
}

palindromeChecker(123456)