var ball,database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball=createSprite(250,250,20,20);
    ball.shapeColor="green";

    var ballposition=database.ref('ball/position');
    ballposition.on("value",readPosition);
}
function draw(){
    background("orange");

    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,4);
    }
    drawSprites();
}
}


/*function changePosition(x,y){
    ball.x=ball.x+x;
    ball.y=ball.y+y;
}*/

function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}