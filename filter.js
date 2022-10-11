const numberArray=[12,324,213,4,2,3,45,4234];
var isEven=numberArray.filter(function(item){
    if(item%2==0){
        return item;
    }
})
document.write(isEven);
document.write("<br>");
document.write("<br><br>");


//prime number

const isPrime1 = numberArray.filter(function(item){
    let prime = true;
    if(item>1){
        for(let i=2;i<item;i++){
            if(item%i == 0){
                prime = false;
                break;
            }
        }
        if(prime){
            return item;
        }
    }
})
console.log(isPrime1);