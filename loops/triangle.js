let n = 5;

for(let i =n; i>0; i--){
     
    let row = '';
    for(let j = 0; j<n; j++){
        row += j + ' ';
    }
    console.log(row)
}



for (let i = 0; i< n; i++){
    let row = '';
    for(let j = 0; j<= n-(i+1); j++){
        row += ' ';
    }
    for (let k =0; k<=i; k++){
        row += ' *';
    }
    console.log(row) 
}

 
 

for(let i = 0; i< n; i++){
    let row = '';
    let switchVal = 1;
    for(let j = 0; j<=i; j++){
        row += ' ' + switchVal;
        if(switchVal == 1){
            switchVal = 0
        }else{
            switchVal = 1
        }

    }

    console.log(row)
}
