class Player{
    constructor (){
        
    }

    //to get game state value from db


    getCount(){
        var getCountRef = database.ref('playerCount');
        getCountRef.on("value", function (data){
         playerCount= data.val();
        })
    }


    //to save the  game state value in db

    updateCount(count){
        database.ref('/').update({
        playerCount : count
        })
    }

    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
         name : name 
        })

    }

}
