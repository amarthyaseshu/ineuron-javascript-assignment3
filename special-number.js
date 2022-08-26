//Special Number

//Input 
let number=1034;

//Output
console.log(isSpecialNumber(number));

//Function to find special number or not

function isSpecialNumber(number){
    let sumOfFactorial=0;
    let tempNumber=number;
    while(tempNumber>0){
        let partialNumber=tempNumber%10;
        sumOfFactorial+=getFactorial(partialNumber);
        tempNumber=parseInt (tempNumber/10);
    }
    if(number===sumOfFactorial){
        return true;
    }else{
        return false;
    }
}

//Function to get the factorial of a number
function getFactorial(number){
    let factorial=1;
    if(number<=1){
        return factorial;
    }else{
        for(let i=number;i>1;i--){
            factorial=factorial*(i);
        }
        return factorial;
    }
}