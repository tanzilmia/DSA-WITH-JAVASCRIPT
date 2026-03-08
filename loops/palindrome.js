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

//  make this sortcurt

const getPolindrome = (x) =>{
    if(x < 0) return false;
    let xCopy = x;
    let reverse = 0;
    while(x> 0){
    const lastDigit = x % 10;
    reverse = (10* reverse) + lastDigit;
    x = Math.floor(x/10);
    }
    console.log(reverse)
    return xCopy === reverse


}

const reuslt =  getPolindrome(1214);
console.log(reuslt)