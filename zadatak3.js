var p =4;
for(i = 1;i <= p;i++){
var str="";
var str1="";

for(j = 1;j <=p-i;j++){

   str=str+' ';
}
for(k =1; k <= (i-1)+i;k++){
   str=str+'*';
}


for(j=1;j<=i;j++){

   str1+='*';





 
}
console.log(`${str} ${str1}`)
}