noseX = 0;
noseY = 0;
LeftWristX = 0;
RightWristX = 0;
difference = 0;

function preload(){

}

function draw(){
background("grey");
textSize(difference);
fill("red");
text("Tanish", noseX, noseY);
}

function setup(){
    var video=createCapture(VIDEO);
    video.size(550, 500);

    var canvas=createCanvas(550, 500);
    canvas.position(560, 110);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("noseX = " + noseX + ", noseY = " + noseY);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.y;
        difference = LeftWristX - RightWristX;
    }
}

function modelLoaded(){
    console.log("Apple");
}