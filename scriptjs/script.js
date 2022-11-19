const mario = document.querySelector('#mario')
const pedra = document.querySelector('.pedra')
const pontuaçao = document.querySelector('#ponto')
const botao = document.querySelector('#botao')

const s = 0
const pontos =()=>{


    s+=10

    return s
}

const pulo = (e)=>{ /**funçao pulo, inclui e exclui o obejto na função classse ( jump )responsavel por mover o eixo y a 180px acima  */
    if((e.key=='ArrowUp')||(e.key == 'w')){
        mario.classList.add('jump')
        setTimeout(()=>{
            mario.classList.remove('jump')
        },500 )
    } 
    
}
const pulo1 = ()=>{ /**funçao pulo, inclui e exclui o obejto na função classse ( jump )responsavel por mover o eixo y a 180px acima  */
        
        mario.classList.add('jump')
        setTimeout(()=>{
            mario.classList.remove('jump')
        },400 )
    
    
}

 
const loop = setInterval(()=>{
   
    
    if((pedra.getBoundingClientRect().left <=  354.0575256347656) && pedra.getBoundingClientRect().left > 297.2382507324219 && (mario.getBoundingClientRect().bottom > 450.81752014160156)){
      pedra.style.animation ='none'
        pedra.style.left = '150px'
        mario.classList.add('morte')
    }

    
},1)



addEventListener('keydown',(e)=>pulo(e))
botao.addEventListener('click',pulo1)