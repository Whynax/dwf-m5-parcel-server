import { state } from "../../state";
export function scoreComp(){
    class Score extends HTMLElement {
        constructor() {
          super();
            this.render();
          
        }
        render(){
            const shadow = this.attachShadow({mode: 'open'});
            const div = document.createElement("div");
            const style= document.createElement("style");
            const score = state.getScore();
            
            div.innerHTML = `
                <div class="container">
                <h3 class="title">Score</h3>
                <custom-text class="text" variant="body">Vos: ${score.myScore}</custom-text>
                <custom-text class="text" variant="body">Maquina: ${score.computerScore}</custom-text>
                </div> 
            `

            style.innerHTML = `
                .container{
                    background: #FFFFFF;
                    border: 10px solid #000000;
                    box-sizing: border-box;
                    border-radius: 10px;
                    min-width: 250px;
                    min-height: 210px;
                }
                .title{
                    font-family: Odibee Sans;
                    font-size: 55px;
                    text-align:center;
                    margin: 0 auto;
                }
                .text{
                    font-family: Odibee Sans;
                    text-align: right;
                    padding: 10px;
                }
            `
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
      }

      customElements.define("custom-score", Score);
}