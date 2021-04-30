var ball;

var database, position;



function setup(){
    createCanvas(500,500);

    database = firebase.database();


    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


    //.ref(), .on()
    var databaseballposition = database.ref('ball/position');
    databaseballposition.on("value",getValues,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){

        updateValues(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
       updateValues(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updateValues(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updateValues(0,+1);
    }
    drawSprites();
}


function getValues(data)
{
    position = data.val();

    ball.x = position.x;
    ball.y = position.y;

}

function updateValues(x,y)
{
    database.ref('ball/position').set({
        'x' : position.x + x,
        'y' : position.y + y
    })

}

function showError()
{
 console.log("There is an error in the code");

}