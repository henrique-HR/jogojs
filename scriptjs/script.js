const mario = document.querySelector('#mario')
const pedra = document.querySelector('.pedra')
const score = document.querySelector('#ponto')
const botao = document.querySelector('#botao')
let largura = window.screen.width
let pedra_position = pedra.offsetLeft
let botoom = getComputedStyle(mario).bottom
/**________________________//____________________ */
if(largura > 896){

    
    function fim(){
                pedra.style.animation ='none'
                pedra.style.left = '150px'
                mario.classList.add('morte')
    }
    const pulo = (e)=>{ 
        /**funçao pulo, inclui e exclui o obejto na função classse ( jump )responsavel por mover o eixo y a 180px acima  */
        if((e.key=='ArrowUp')||(e.key == 'w')){
            mario.classList.add('jump')
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


}else if(largura<=896){
    const pulo = (e)=>{ 
    /**funçao pulo, inclui e exclui o obejto na função classse ( jump )responsavel por mover o eixo y a 180px acima  */
    
        mario.classList.add('jump')
       
        setTimeout(()=>{
            mario.classList.remove('jump')
        },500 )
    }
    function fim(){
        pedra.style.animation ='none'
        pedra.style.left = '120px'
        mario.classList.add('morte')
    }
    const loop = setInterval(()=>{ 
        let botoom = window.getComputedStyle(mario).bottom
            console.log(botoom )
         if((pedra.getBoundingClientRect().left <= 75 ) &&  (pedra.getBoundingClientRect().x > 70) && (botoom <= 10+'px')){
            
            
                fim()
        }  
        
    },0)

   

    botao.addEventListener('click',pulo)
    
}
 