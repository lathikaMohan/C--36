class Game{
    constructor (){
        
    }

    //to get game state value from db


    getState(){
        var getStateRef = database.ref('gameState');
        getStateRef.on("value", function (data){
        gameState = data.val();
        })
    }


    //to save the  game state value in db

    update(state){
        database.ref('/').update({
        gameState : state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}