type Jugada = "piedra" | "papel" | "tijera";

 const state = {
    data : {
        currentGame: {
            computerPlay: "",
            myPlay : "",
        },
        
        history:  [],
        listeners:[],
        
    },
    init(){
        const localData = localStorage.getItem("saved-state");
        if(JSON.parse(localData) != null)
        this.data.history=(JSON.parse(localData));
        
    },

    getState(){
        return this.data
    },
    setState(newState){
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
            
        }
        
    },

    suscribe(callback: (any) => any) {
        this.listeners.push(callback);

    },
    setMove(move:Jugada){
        const currentState = state.getState();
        currentState.currentGame.myPlay = move;
        let random = Math.floor(Math.random() *3);
        console.log(random, "random");
        if(random == 0){
            currentState.currentGame.computerPlay = "tijera";
        }
        if (random == 1){
            currentState.currentGame.computerPlay = "piedra";
        }
        if (random == 2){
            currentState.currentGame.computerPlay = "papel";
        }

        this.pushToHistory(currentState.currentGame.myPlay, currentState.currentGame.computerPlay);
    },
    getScore(){
        let myScore =0;
        let computerScore = 0;
        let history = state.data.history
        console.log(history);
        for (const s of history) {
            
            if(this.whoWins(s.myPlay,s.computerPlay)=="ganaste")
            myScore++;
            if(this.whoWins(s.myPlay,s.computerPlay)=="perdiste")
            computerScore++;
        } 
        
        return {myScore,computerScore}
    },
    pushToHistory(myPlay:Jugada, computerPlay:Jugada){
        const currentState = state.getState();
        currentState.history.push({myPlay,computerPlay});
        localStorage.setItem("saved-state",JSON.stringify(currentState.history));

    },

    whoWins(myPlay: Jugada, computerPlay: Jugada){
        if(myPlay == "piedra"){
            if(computerPlay == "papel")
            return "perdiste";
        if(computerPlay == "tijera")
            return "ganaste";
        if(computerPlay == "piedra")
            return "empataste";
        }

        if(myPlay == "tijera"){
            if(computerPlay == "papel")
            return "ganaste";
        if(computerPlay == "piedra")
            return "perdiste";
        if(computerPlay == "tijera")
            return "empataste";
        }


        if(myPlay == "papel"){
            if(computerPlay == "tijera")
            return "perdiste";
        if(computerPlay == "piedra")
            return "ganaste";
        if(computerPlay == "papel")
            return "empataste";
        }
    }
        

}

export {state};
