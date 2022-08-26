//Armstrong number

//Input
let number=153;

//Output
console.log(isArmstrongNumber(number));

//Function to find an armstrong number or not
function isArmstrongNumber(number){
    let numberCubeSum=0;
    let tempNumber=number;
    while(tempNumber>0){
      let  partialNumber=tempNumber%10;
      numberCubeSum+=partialNumber*partialNumber*partialNumber;
      tempNumber= parseInt(tempNumber/10);
    }
    if(number===numberCubeSum){
        return true;
    }else{
        return false;
    }
} 

