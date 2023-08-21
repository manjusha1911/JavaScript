var i=1;
var f=1
var prompt=require("prompt-sync")();
num=parseInt(prompt("enter the number:"));
while(i<=num){
    f*=i;
    i++;
}
console.log(f);