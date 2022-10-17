noseX = "";
noseY = "";
GameStatus = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	 video = createCapture(VIDEO)
	 video.size(800,400);
	 video.parent('game_console');

	 poseNet = ml5.poseNet(video, modelLoaded);
	 poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
	console.log('Model Loaded!');
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		
	}
}

function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loading";
}

function game()
{
	instializeInDraw();
	moveEnvironment(mario);
	drawSpirtes();
	console.log("noseX = " + noseX + ", noseY = " + noseY);	
}

function draw() {
	game()
}

