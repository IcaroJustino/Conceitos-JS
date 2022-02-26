import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;

    } else {
        return false;
    }
}
function inLista(n, l) {
    if (l.indexOF(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert("valor invalido ou ja encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('ta vazio')
    }else{
        let tot = valores.length
        valores.sort();
        let maior =  valores[valores.length -1]
        let menor = valores[0]
        let soma;
        let media;
        for(let pos in valores){
            soma += valores[pos]
        }
        media = soma/valores.length
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo,Temos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p> maior valor ${maior}  </p>`
        res.innerHTML += `<p> menor valor ${menor} </p>`
        res.innerHTML += `<p> Soma total ,Temos ${soma} </p>`
        res.innerHTML += `<p> Media temos ${media} </p>`
    }
}