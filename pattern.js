//Pattern

let pattern = "";
let number=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        pattern += number++;
    }
    pattern += "\n";
}
console.log(pattern);