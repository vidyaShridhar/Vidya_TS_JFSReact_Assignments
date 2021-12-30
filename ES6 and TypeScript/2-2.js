function armstrongNumber(number){
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp / 10); 
    }
    if (sum == number) {
        return true;
    }
    
    return false;
    
}

const values = []

let idx = prompt("idx: ")

for (let i = 0; i<1000;i++){
    values[i] = idx;
    idx++;
}

for (let val of values){
     if (armstrongNumber(val)){
        console.log(val," is armstrongNumber");
        break;
    }
}