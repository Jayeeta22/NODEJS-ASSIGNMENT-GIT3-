// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Please enter your name:",(ans ,ans1)=>{
//     console.log(`Hello ${ans} ${ans1}`)
//     rl.close();
// })
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter your name",(ans)=>{
            console.log(ans)
            rl.close()
})