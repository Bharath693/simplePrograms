const variableCount ="abaccbaaba";

function countrepeatingVariable(variableCount){
  let count = 0;

  for(let i=0;i<variableCount.length;i++){
      if(variableCount.charAt(i) === 'a'){
          count++
      }
  }
  console.log(count)
}
countrepeatingVariable(variableCount)