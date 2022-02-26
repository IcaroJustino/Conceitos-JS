let num =  [5,8,9,3];
console.log(`Nosso vetor é o ${num}`);
num[3] = 6
console.log(`Nosso vetor é depois de mudar ${num}`);
num.push(7);
console.log(`Nosso vetor depois do push o ${num}`);
num.pop(7);
console.log(`Nosso vetor agora é o ${num}`);
console.log(`o tamanho do vetor é ${num.length}`);
num.sort();
console.log(`vetor organizado ${num}`);

for(i = 0 ;i < num.length; i++){
    console.log(num[i]);
};