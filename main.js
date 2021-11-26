imageName = "";
rectangleColor = "black";
circleColor = "black";
circleStroke = "black";
RectangleStroke = "black";
function preload() {

}

function setup() {
    canvas = createCanvas(740, 540);
    canvas.position(110,1000);

    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 150, 130, 440, 280);//x,y,h,w

    tint(tint_color);

    stroke(circleStroke);
    fill(circleColor);
    circle(100, 80, 50); //top left

    stroke(RectangleStroke);
    fill(rectangleColor);
    rect(95, 105, 10, 330); //x,y,h,w,r

    stroke(circleStroke);
    fill(circleColor);
    circle(100, 460, 50); //bottom left

    stroke(RectangleStroke);
    fill(rectangleColor);
    rect(125, 77, 488, 10); //x,y,h,w,r

    stroke(circleStroke);
    fill(circleColor);
    circle(638, 80, 50); //top right

    fill(rectangleColor);
    stroke(RectangleStroke);
    rect(635, 105, 10, 330); //x,y,h,w,r

    stroke(circleStroke);
    fill(circleColor);
    circle(638, 460, 50); //bottom right

    fill(rectangleColor);
    stroke(RectangleStroke);
    rect(126, 450, 487, 10); //x,y,h,w,r
    
}

function take_snapshot() {
    imageName = document.getElementById("img_name").value;
    save(imageName + ".png");
}

function applyFilter() {
    tint_color = document.getElementById("filt").value;
}

function applyCircleColor() {
    circleColor = document.getElementById("circColor").value;
}

function applyRectangleColor() {
    rectangleColor = document.getElementById("RectColor").value;
}

function applyRectangleBorderStroke() {
    RectangleStroke = document.getElementById("RectBordColor").value;
}

function applyCircleStroke() {
    circleStroke = document.getElementById("CircBordColor").value;
}

function setDefault() {
    rectangleColor = "skyblue";
    circleColor = "skyblue";
    circleStroke = "navy";
    RectangleStroke = "navy";
    tint_color = "white";
    draw();
}