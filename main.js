function setup()
{
    canvas = createCanvas(640 , 480);
    canvas.position(150 , 150);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video , 230 , 150 , 220 , 200);
    fill(255 , 0 ,0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0 , 128 , 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20)

    fill(255 , 0 ,0);
    stroke(255, 0, 0);
    circle(580, 50, 80);

    fill(0 , 128 , 0);
    stroke(0, 128, 0);
    rect(90, 400, 460, 20)
}

function take_snapshot()
{
    save('Digital_picture.png');
}