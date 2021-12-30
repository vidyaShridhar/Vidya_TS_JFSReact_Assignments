//1
let name = ["l","m","n","o"];
[, ,a,] = name;
console.log("a:",a);
//2
let organization ={ 
    Name:"Amazon" ,
    adress : {
        city:"Chikkamagalur",
        state:"Karnataka",
        pincode:577228
        
    }
    
};
let {adress:{pincode: pincode}} = organization;
console.log("pincode :" +pincode );
