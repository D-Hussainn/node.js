console.log("mijn eerste node code");

setInterval(() => {
    console.log("koekoek!");
}, 3000);

const readline = require("readline").createInterface({
    input: process.stdin,
    output : process.stdout,
});

readline.question("Who are you?",(name) =>{
    console.log(`hey there ${name}!`);
    readline.close();
});