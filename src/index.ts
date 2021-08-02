import {scoreComp} from "./components/score"
import {contadorComp} from "./components/contador"
import {loseComp} from "./components/lose"
import {winComp} from "./components/win"
import {initRouter} from "./router"
import {TijeraComp} from "./components/jugada-tijera"
import {PiedraComp} from "./components/jugada-piedra"
import {PapelComp} from "./components/jugada-papel"
import {initTextComp} from "./components/text"
import {initButtonComp} from "./components/button"
import {state} from "./state"

(function(){
    scoreComp();
    contadorComp();
    loseComp();
    winComp();
    TijeraComp();
    PiedraComp();
    PapelComp();
    initButtonComp();
    initTextComp();

    state.init();
    
    const root = document.querySelector(".root")
    initRouter(root)
})();




