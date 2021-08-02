import { state } from "../../state";
const ganaste = require("url:../../../src/img/ganaste.svg");
const perdiste = require("url:../../../src/img/perdiste.svg");
const empate = require("url:../../../src/img/empate.png");
const fondo = require ("url:../../../src/img/fondo.svg");

export function initPageResults(params){
    const div = document.createElement("div");
    const style = document.createElement("style");
    const lastState = state.getState();
     const myState =  lastState.currentGame.myPlay;
     const computerState = lastState.currentGame.computerPlay;
     const myPlay = document.createElement("div");
     const computerPlay = document.createElement("div");
     if(myState == "piedra" )
         myPlay.innerHTML = `
         <jugada-piedra variant= "big" class= "my-play"></jugada-piedra>
         `
     if(myState == "papel")
         myPlay.innerHTML = `
         <jugada-papel variant="big" class= "my-play"></jugada-papel>
         `
    
    if(myState == "tijera")
         myPlay.innerHTML = `
        <jugada-tijera variant="big" class="my-play"></jugada-tijera>
        `
    if(computerState == "piedra")
        computerPlay.innerHTML = `
        <jugada-piedra variant= "big" class= "computer-play"></jugada-piedra>
        `
    if(computerState == "papel")
        computerPlay.innerHTML = `
        <jugada-papel variant= "big" class= "computer-play"></jugada-papel>
        `
    if(computerState == "tijera")
        computerPlay.innerHTML =`
        <jugada-tijera variant= "big" class= "computer-play"></jugada-tijera>
        `
     
    
    div.innerHTML = `
        <div class = "container-all">
        <div class="my-play"></div>
        <div class="computer-play"></div>
        <section class= "section">
        <img class="imagen" src = "${ganaste}"></img>
        <custom-score></custom-score>
        <div class= "container-button">
        <custom-button class="button">Volver A Jugar</custom-button>
        </div>
        </section>
        </div>
    `

    style.innerHTML = `
        *{
            box-sizing:border-box;
        }
        body{
            margin:0;
        }
        .imagen{
            width:260px;
            height:260px;
        }
        .section{
            background-image:url(${fondo});
            display: none;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            position: absolute;
            top: 0px;
            bottom: 0px;
            right: 0px;
            left: 0px;
        }
        .section-2{
            background-color: #894949E5;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width:375px;
            min-height: 667px;
            position: absolute;
            top: 0px;
            bottom: 0px;
            right: 0px;
            left: 0px;
            display:none;
        }
        
        .container-button{
            padding: 20px;
            min-width: 300px;
        }
        .my-play{
            min-width: 157px;
        }
        .container-all{
            background-image:url(${fondo});
            display:flex;
            flex-direction: column-reverse;
            min-height:100vh;
            justify-content: space-between;
            align-items: center;
        }
        .computer-play{
            min-width: 157px;
            transform: rotate(180deg);
        }
        .button{
            width:100%;
        }
        
    `

    const intevarlo = setInterval(()=> 1000);
    const section:any = div.querySelector(".section");
    const imagen:any = div.querySelector(".imagen");
    const jugadas:any = div.querySelector("container-all");
    const sectionLose:any = div.querySelector(".section-2");
    console.log(sectionLose);

    setTimeout(()=>{
        clearInterval(intevarlo)
        if(state.whoWins(state.getState().currentGame.myPlay,state.getState().currentGame.computerPlay)=="ganaste")
        {
            section.style.display= "flex";
            section.style.background = "#888949E5";
            imagen.src = ganaste;
            
            
            
        }
        if((state.whoWins(state.getState().currentGame.myPlay,state.getState().currentGame.computerPlay)=="perdiste"))
        {
            section.style.display = "flex";
            section.style.background = "rgba(137, 73, 73, 0.9)";
            imagen.src = perdiste;
            
        
        }
        if((state.whoWins(state.getState().currentGame.myPlay,state.getState().currentGame.computerPlay)=="empataste"))
        {
            section.style.display = "flex";
            section.style.background = "rgba(255, 233, 0, 0.7)";
            imagen.src = empate;
        }
    },1000);

    div.querySelector(".computer-play").appendChild(computerPlay);
    div.querySelector(".my-play").appendChild(myPlay);
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click",()=>{
        params.goTo("/play");
    })
    return div;
}