//Player setting
var player = {
	x:50,
	y:100,
	girl:0,
	girldir:96,
	speed:5
}

//canvas setting
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.height = 198;
canvas.width = 330;

//image Load part
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "rpg.gif";

bgImage = new Image();
bgImage.ready = false;
bgImage.onload = checkReady;
bgImage.src = "map.jpg";

//controller

var keyclick = {};
document.addEventListener("keydown",function(event){
	keyclick[event.keyCode]=true;
	move(keyclick);
},false);

var keyclick = {};
document.addEventListener("keyup",function(event){
	delete keyclick[event.keyCode];
},false);


//move
function move(keyclick){
	if(39 in keyclick){player.x += player.speed; player.girldir=0;}//right
	if(37 in keyclick){player.x -= player.speed; player.girldir=32;}//left
	if(38 in keyclick){player.y -= player.speed; player.girldir=64;}//top
	if(40 in keyclick){player.y += player.speed; player.girldir=96;}//bottom

	if(player.x >=(canvas.width - 32)){player.x = 0;}
	if(player.y >=(canvas.height - 32)){player.y = 0;}
	if(player.x < 0 ){player.x = (canvas.width - 32);}
	if(player.y < 0 ){player.y = (canvas.height - 32);}
	if(player.girl == 0){player.girl = 32}else{player.girl = 0;}

	render();
}


function checkReady(){
	this.ready = true;
	playgame();
}

function playgame(){
	render();
}

// charactor drow
function render(){
	context.fillRect(0,0,canvas.width,canvas.height);
	context.drawImage(bgImage,0,0);
	context.drawImage(mainImage,player.girl,player.girldir,32,32,player.x,player.y,32,32);
	// context.drawImage(mainImage,0,96,32,32,0,0,32,32);
	// context.drawImage(mainImage,player.girl,player.girldir,32,32,player.x,player.y,32,32);

	//score
	// context.font = "20px Verdana";
	// context.fillstyle = "white";
	// context.filltext("score" + score);

}

document.body.appendChild(canvas);
// ctx.fillText("hello",300,200);
