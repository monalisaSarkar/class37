class Game{
    constructor(){   }

    getState()
    {
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data)
        {
        Gamestate=data.val();
        })

    }
    update(Gamestate)  
    {
        database.ref('/').update({
        gameState:Gamestate
        })

    }

   async  start()
   {
     if(Gamestate===0)
     {
        player=new Player();
        var playerCountRef=await database.ref('playerCount').once("value")
        if(playerCountRef.exists())
        {
        PlayerCount=playerCountRef.val();
        player.getCount();
        }
    
        form=new Form();
        form.display();
        }

        //formaton of cars
        car1=createSprite(100,200);
      //  car1=addImage("car1",car_1);
        car2=createSprite(300,200);
       // car2=addImage("car2",car_2);
        car3=createSprite(500,200);
     //   car3=addImage("car3",car_3);
        car4=createSprite(700,200);
       // car4=addImage("car4",car_4);
        cars=[car1,car2,car3,car4];
    }
    
    

    play(){

        form.hide();
       // textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();

        if(allPlayers!==undefined)
        
        {
           // background("#c68767");
           // image(track,o,-displayHeight*4,displayWidth,displayHeight*5);
             var index=0;//index of the array 
             var x=0;// var for the x position
             var y;

            console.log(allPlayers)
           // var display_position=130;
            for (var plr in allPlayers)
            {
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                console.log("for loop")
                console.log(plr)
                console.log(player.index)

                if(index===player.index)
                {
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y
                  console.log("red color")
                }
            
           var  display_position=display_position+20;
            textSize(20);
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
            }
        }
            if(keyIsDown(UP_ARROW)&& player.index!==null){
                console.log("hello")
                player.distance+=50;
                player.update();
            }
     }//end of play
 }// end of game 
    
    