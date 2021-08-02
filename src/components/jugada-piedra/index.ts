export function PiedraComp (){
    class PiedraComponent extends HTMLElement {
        constructor(){
            super();
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant") || "small"
            const shadow = this.attachShadow({mode:"open"});
            const style = document.createElement("style")
            const div = document.createElement("div")
            const imageURL = require("url:../../../src/img/piedra.svg");
            
            div.innerHTML= `
            <img variant="small" class="big" src=${imageURL}>
            `

            style.innerHTML=`
                .small{
                    height: 128px;
                    width: 56px;
                }
                .normal{
                    height: 232px;
                    width: 102px;
                }
                .big{
                    height:100%;
                    width:100%;
                }
            `

            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);

            const elegido = div.querySelector (".big");
            elegido.addEventListener("click", (r)=>{
                const evento = new CustomEvent("change",{detail:
                {
                    myPlay:"piedra"
                }
            })
                this.dispatchEvent(evento);
            })
        }
    }
    customElements.define('jugada-piedra',PiedraComponent)
}