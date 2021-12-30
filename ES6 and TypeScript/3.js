var order = {
    id:1,
    title:"Coffee",
    Price:10,
    printOrder : function (){
        console.log(this.title);
    },
    getPrice : function(){
        console.log(this.Price);
    }

};
Object.assign({}, order);
console.log(order);