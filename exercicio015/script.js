function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length ==0 || fano.value >ano){
        alert('verifique os dados e tente novamente')
    } else{
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsexo[0].checked){
            genero ='Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','CriancaH.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','JovemH.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','Homem.jpg')
            }else {
                //idoso
                img.setAttribute('src','idosoH.jpg')
            }
        }else if (fsexo[1].checked){
            genero ='Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','CriancaM.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','jovemM.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','mulher.jpg')
            }else {
                //idoso
                img.setAttribute('src','IdosoM.jpg')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}