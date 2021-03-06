import { state } from "../../state";
const fondo = require("url:../../../src/img/fondo.svg");

export function initGame(params){
    const div = document.createElement("div");
    div.innerHTML= `
        <section class="section">
        <div class="container-contador">
        <contador-comp class ="contador"></contador-comp>
        </div>
        <div class="container">
        <jugada-tijera id = "pointer" class="elementos"></jugada-tijera>
        <jugada-papel id = "pointer" class="elementos"></jugada-papel>
        <jugada-piedra id = "pointer" class="elementos"></jugada-piedra>
        </div>
        </section>
        
    `
    const style = document.createElement("style");
    style.innerHTML= `
         * {
            box-sizing: border-box;
        }
         body {
            margin: 0;
         }
        .section {
            background-image:url(${fondo});
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            min-width: 375px;
            min-height: 667px;
         
        }
        @media(min-width:700px){
            .section{
                background-image:url(${fondo});
                height: 100vh;
            }
        }
        .container-contador{
            min-height: 200px;
        }
  
        .container {
            min-width: 370px;
            min-height: 200px;
            justify-content: space-evenly;
            display: flex;
            flex-direction: row;
            align-items: flex end;
         }
         .elementos {
             
             position:relative;
             top: 150px;
         }
    
    `
    console.log(state.getScore);
    const pointEl = div.querySelectorAll("#pointer");
    let contador:any = div.querySelector(".contador");
    let boolean = false;
    
    pointEl.forEach(element =>{
        element.addEventListener("change", (e:any)=>{
            boolean = true;
            const evento = new CustomEvent("change", {detail:{
            myPlay: e.detail.myPlay
        }})
        
        state.setMove(e.detail.myPlay)
        
        
        params.goTo("/results");
        })
    })
    contador.addEventListener("change", (e:any)=>{
        
        console.log("entro al if",e);
        if(boolean == false){
            params.goTo("/instructions")
        }
        

    })
    
    
    div.appendChild(style);
    
    
    return div;
}