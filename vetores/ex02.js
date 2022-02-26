let num = [1,2,3,4,5,6,7,8,9,10];
/*
for(i = 0 ;i < num.length; i++){
    console.log(` a posição ${i} possui o valor ${num[i]}`);
};
*/
// maneira simplificada 
for (let i in num ){
    console.log(` a posição ${i} possui o valor ${num[i]}`);
}