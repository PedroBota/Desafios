function atualisar (){
    bod=document.getElementById('bod')
    Texto=document.getElementById('Texto')
    img=document.getElementById('img')
    hora=new Date().getHours()
    
    if (hora>=5 && hora<12){
        Texto.innerHTML='Bom dia! São ' +hora+' horas'
        bod.style.backgroundColor= 'rgba(0, 128, 0, 0.747)'
    }
    else if (hora>=12 && hora<18){
        Texto.innerHTML='Boa tarde! São ' +hora+' horas'
        img.src='img/tarde.JPG'
    }
    else{
         Texto.innerHTML='Boa noite! São ' +hora+' horas'
         bod.style.backgroundColor= 'blueviolet'
        img.src='img/noite.jpeg'
    }
}