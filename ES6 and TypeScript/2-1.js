class NextFibonacci{
    constructor(previousNo,currentNo){
             this.previousNo = previousNo;
             this.currentNo=currentNo;
          }
    next(n)
    {
        let a = n * (1 + Math.sqrt(5)) / 2.0;
        return Math.round(a);
    }
}


  nf=new NextFibonacci();
  let n = 5;
  console.log(nf.next(n));