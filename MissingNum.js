const array = [1,2,3,4,5,7]

let sum=0;
function MissingNum(){
   for(i =0 ;i< array.length;i++){
       sum+= array[i]
    //    console.log(sum)
   }
   let n = array.length+1
   let sa = Math.floor((n*(n+1))/2)
   let missingNum = sa - sum;
   console.log(missingNum)
}
MissingNum()