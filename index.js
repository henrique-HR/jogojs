const game = document.querySelector('.game_board')
const mario = document.querySelector('#mario')
const pedra = document.querySelector('.pedra')
const score = document.querySelector('#ponto')
const botao = document.querySelector('#botao')
let audio = document.createElement('audio')
let audiofundo = document.createElement('audio')
let largura = window.screen.width
let pedra_position = pedra.offsetLeft
let botoom = getComputedStyle(mario).bottom

audiofundo.setAttribute('src','./audio/fundo.mp3')
audiofundo.play()


/**________________________//____________________ */
if(largura > 896){

     
     
    function fim(){   

        game.appendChild(audio)
        audio.setAttribute('src','./audio/derruba.mp3')
        pedra.style.animation ='none'
        pedra.style.left = '150px'
        mario.classList.add('morte')       
        audio.play()
        audiofundo.pause()
        clearInterval(loop)
     }           
    // }
    const pulo = (e)=>{ 
        /**funçao pulo, inclui e exclui o obejto na função classse ( jump )responsavel por mover o eixo y a 180px acima  */
        

        if((e.key=='ArrowUp')||(e.key == 'w')){
            mario.classList.add('jump')
            audio.setAttribute('src','./audio/ladrao.mp3') 
            audio.play()
            setTimeout(()=>{
                mario.classList.remove('jump')
            },500 )
        }
    }
    const loop = setInterval(()=>{ 
        if((pedra.getBoundingClientRect().left <= 160 )&&  (pedra.getBoundingClientRect().left >= 145) && (mario.getBoundingClientRect().bottom >= 450.81752014160156 )){
            
            fim()

        }  
    },0)
    

addEventListener('keydown',(e)=>pulo(e))


}else if(largura<=1096){
    const pulo = ()=>{ 
    /**funçao pulo, inclui e exclui o obejto na função classse ( jump )responsavel por mover o eixo y a 180px acima  */
        audio.setAttribute('src','./audio/ladrao.mp3')

        mario.classList.add('jump')
        
        audio.play()
       
        setTimeout(()=>{
            mario.classList.remove('jump')
            
        },500 )
    }
    function fim(){
        game.appendChild(audio)
        audio.setAttribute('src','./audio/derruba.mp3')
        audio.play()
        pedra.style.animation ='none'
        pedra.style.left = '120px'
        mario.classList.add('morte')
        clearInterval(loop)
    }
    const loop = setInterval(()=>{ 
        let botoom = window.getComputedStyle(mario).bottom
         if((pedra.getBoundingClientRect().left <= 78 ) &&  (pedra.getBoundingClientRect().x > 70) && (botoom <= 10+'px')){
            
            
                fim()
        }  
        
    },10)

   

    botao.addEventListener('click',pulo)
    
}
 