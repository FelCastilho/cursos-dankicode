let elements = document.querySelectorAll('.player-options div > img');
const enemyOptions = document.querySelectorAll('.enemy-options div');
let playerOpt = '';
let inimigoOpt = '';

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');
     
    if(playerOpt == "papel"){

        if(inimigoOpt == "papel"){
          
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(inimigoOpt == "tesoura"){
           
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(inimigoOpt == "pedra"){
          
            vencedor.innerHTML = "O player ganhou";
        }


    }

    if(playerOpt == "tesoura"){

        if(inimigoOpt == "papel"){
            
            vencedor.innerHTML = "O player ganhou";
        }else if(inimigoOpt == "tesoura"){
          
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(inimigoOpt == "pedra"){
        
            vencedor.innerHTML = "O inimigo ganhou";
        }


    }

    if(playerOpt == "pedra"){

    if(inimigoOpt == "papel"){
     
        vencedor.innerHTML = "O inimigo ganhou";
    }else if(inimigoOpt == "tesoura"){
   
        vencedor.innerHTML = "O player ganhou";
    }else if(inimigoOpt == "pedra"){
    
        vencedor.innerHTML = "O jogo foi empatado";
        
    }


    }



}


function resetInimigo(){
    for(let i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
        inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
    }
}

function inimigoJogar(){

    let rand = Math.floor(Math.random() * 3);
    resetInimigo();

    for(let i = 0; i < enemyOptions.length; i++){
        //Aqui vai o item jogado
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
        }
    };

    validarVitoria()
}

function resetOpacityPlayer(){
    for(let i = 0; i < elements.length; i++){
        elements[i].style.opacity = 0.3;
    }
}

//Percorrendo todos os itens para poder chamar o evento no item clicado
for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', (t) =>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;

        //Pegando o atributo que foi dado no HTML (opt)
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
        
    })
}