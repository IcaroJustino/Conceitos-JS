function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo =document.getElementById('txtp')
    var res = document.getElementById('res')
// variaveis onde você puxa os dados do html
    if(ini.value.length == 0 || fim.value.length ==0){
        window.alert('[ERRO] faltam dados');
    } else{
        res.innerHTML ='Contando:'
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
// variaveis com os valores salvos nos inputs do HTML
        if (p <= 0){
            window.alert("passo invalido, considerando passo 1")
            p =1;
        }
        if(i <f){
            //crescente
            for(let c =i; c <= f; c +=p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        else{
            //descrescente
            for(let c =i; c >= f; c -=p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
    }
}