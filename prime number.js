var i=1;
var prompt=require("prompt-sync")();
num=parseInt(prompt("enter the number:"));
var count=0
while (i<=num){
    if (num%i==0){
        count++;
    }
    i++;
}
if(count==2){
    console.log("prime number");
}
else{
    console.log("not a prime number");
}