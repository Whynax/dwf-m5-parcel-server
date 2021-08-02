export function initButtonComp (){
    class ButtonComponent extends HTMLElement {
        constructor(){
            super();
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({mode:"open"});
            const style = document.createElement("style")
            const button = document.createElement("button")
            button.className = "root"

            style.innerHTML = `
                .root{
                    font-family: 'Odibee Sans';
                    font-size: 45px;
                    color: #D8FCFC;
                    background-color: #006CFC;
                    height: 87px;
                    width: 322px;
                    border-radius: 10px;
                    border: 10px solid #001997;
                }
            `

            button.textContent = this.textContent
            shadow.appendChild(button);
            shadow.appendChild(style);
        }
    }
    customElements.define('custom-button',ButtonComponent)
}