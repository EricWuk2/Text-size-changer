
difference = 0;
x = 0;
y = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initilized!');
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill("red");
    text("Eric hates school", x,y);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        x = results[0].pose.leftwrist.x;
        y = results[0].pose.rightwrist.y;
        difference = floor(x-y);
    }
}