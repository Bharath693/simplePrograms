 var s1 ="hello"
 var reverse =""
 function reverseString(){
     for(let i = s1.length ;i>=0 ;i--){
         reverse= reverse+s1.charAt(i)
     }
     console.log(reverse)
 }
 reverseString()