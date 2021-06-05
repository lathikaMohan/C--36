class Form{
    constructor(){

    }
    display(){
      
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(150,50);


        var input = createInput("Name");
         input.position(150,160);
          
         var button = createButton('Play');
         button.position(150,190);

         button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount+1;
            player.update(name);

            player.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Hi  "+name);
            greeting.position(150,150);




         })


    }

}