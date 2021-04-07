var ball;
var database;
var position;
var Gamestate=0;
var PlayerCount;
var form;
var player,game;
var allPlayers;
var car1,car2,car3,car4,cars;


// function preload(){

//     track=loadImage("images/track.jpg");
//     car_1=loadImage("images/car1.png");
//     car_2=loadImage("images/car2.png");
//     car_3=loadImage("images/car3.png");
//     car_4=loadImage("images/car4.png");
//     ground=loadImage("images/ground.png");

// }

function setup(){
    createCanvas(displayWidth-100,displayHeight-100);
    database=firebase.database();
    game=new Game;
    game.getState();
    game.start();
   
}

function draw(){

    // background("white");
     if(PlayerCount===4){
         game.update(1)
     }
    if(Gamestate===1){
         clear();
         game.play();
     }
    // if(Gamestate===2){
    //     clear();
    //     game.end();
    // }
   
    drawSprites();
}

