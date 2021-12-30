let Name=[];
let Length=[];
let newArray=[];
let len = (array) => {
    for(let i=0;i<array.Length;i++){
        Name[i] = array[i];
        Length[i] = array[i];
        newArray[i] = [`Name:${Name[i]} Length:${Length[i]}`];
    }
    console.log(newArray);
}
let names = ["Tom","Ivan","Jerry"];
console.log(names);


