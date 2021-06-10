var array = [1,2,3,3,4,6,6]

function duplicate(array){
    
    for(let i=0;i<=array.length;i++){
        let count = 0;
        for(let j=0;j<array.length;j++){
            if(array[i] ==array[j]){
                count++;
            }
        }
        if(count >1){
            console.log(array[i])
        }
    }
}

duplicate(array)