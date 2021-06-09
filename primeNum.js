const array=[1,2,3,4,5,6,7];
function primeNums(){
    for(var i=1;i<=array.length;i++){
        var count=0;
        for(var j=2;j<=array.length;j++){
            if(i%j===0){
                count++;
            }
        }
        if(count===1){
            console.log(i);
        }
    }
}
primeNums()