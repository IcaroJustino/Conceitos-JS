var idade = 67;
console.log(`voce tem ${idade} anos`)
if (idade < 16) {
        console.log('não vota')
} else if (idade == 16 || idade > 65) {
        console.log('voto opcional')
} else if (idade >= 18) {
        console.log('voto obrigatorio')
}