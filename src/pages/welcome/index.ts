const background = require("url:../../../src/img/fondo.svg")

export function initWelcome (params){
    const div = document.createElement("div");
    div.innerHTML = `
    <section class="section">
    
        <custom-text class="variant" variant="title">
            Piedra Papel o Tijera
        </custom-text>
    
        <custom-button class="start"variant="title">
            Empezar
        </custom-button>

    <div class="manos">
        <jugada-tijera></jugada-tijera>
        <jugada-papel></jugada-papel>
        <jugada-piedra></jugada-piedra>
    </div>
    </section>
    `
    const style = document.createElement("style");
    style.innerHTML=`
        .section{
            display:grid;
            background-image:url(${background});
            align-self: end;
            height: 100vh;
            text-align: center;
            padding:85px 20px 0 20px;
        }
        .manos{
            justify-content: space-evenly;
            align-self: flex-end;
            display:flex;
        }
        @media(min-width:700px){
            .section{
                background-image:url(${background});
                height: 100vh;
                justify-content:center;
            }
        }
        .start{
            display:flex;
            justify-content: center;
            align-self:flex-end;
        }
    `
    div.appendChild(style);

    div.querySelector(".start").addEventListener("click",()=>{
        params.goTo("/play")
    })
    return div;
}