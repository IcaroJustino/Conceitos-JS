let x;
let y;

function soma (a =0,b =0){
    return a + b;
}

function parimp(n){
    if(n%2 ==0){
        return 'par'
    }else{
        return 'impar'
    }
}
x = 10
y = 20
let r =soma(x,y);
r =  parimp(x)
r =soma(x,y);
console.log(r);