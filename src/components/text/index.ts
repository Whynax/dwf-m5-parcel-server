export function initTextComp (){
    class TextComponent extends HTMLElement {
        constructor(){
            super();
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({mode:"open"});
            const style = document.createElement("style")
            const div = document.createElement("div")

            style.innerHTML = `
                .title{
                    font-family: 'STIX Two Math';
                    font-size: 80px;
                    color: #009048;
                }
                .body{
                    font-family: 'STIX Two Math';
                    font-size: 40px;
                    font-weight: 600;
                }
            `

            div.className = variant;
            div.textContent = this.textContent
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define('custom-text',TextComponent)
}