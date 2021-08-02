import {initWelcome} from "./pages/welcome"
import {initRules} from "./pages/instructions"
import {initGame} from "./pages/game"
import {initPageResults} from "./pages/win-result"
import {initPageResultsLose} from "./pages/lose-result"

const routes = [
{
    path:/\/welcome/,
    component: initWelcome,
},
{
    path:/\/play/,
    component: initRules,
},
{
    path:/\/game/,
    component: initGame,
},
{
    path:/\/results/,
    component: initPageResults,
},
{
    path:/\/resultslose/,
    component: initPageResultsLose,
},
]

export function initRouter(container:Element){
    function goTo (path){
        history.pushState({}, "", path)
        Router(path)
    }
    function Router(route){
        console.log("el Router recibio una nueva ruta", route);
        for(const r of routes){
            if(r.path.test(route)){
                const el = r.component({goTo:goTo});

                if (container.firstChild){
                    container.firstChild.remove();
                }

                container.appendChild(el);
            }
        }
        //console.log("soy el router");
    }
    if(location.pathname == "/"){
        goTo("/welcome")
    }else{
        Router(location.pathname);
    }
    window.onpopstate = function(event) {
        Router(location.pathname);
    };
}
