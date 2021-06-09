const prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ('hello')
    },3000);
})

async function helloworld(){
    console.log("before asynch call");
    const p=await prom;
    console.log(p)
    console.log("after async call");
}
helloworld()