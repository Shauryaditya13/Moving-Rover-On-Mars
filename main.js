canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_X=100;
rover_Y=100;
rover_width=100;
rover_height=100;
array_Nasa=["Nasa img1.jpg","Nasa img2.jpg","Nasa img3.jpg","Nasa img4.jpg","Nasa img5.jpg","mars.jpg"];
random_number=Math.floor(Math.random()*6);
background_image=array_Nasa[random_number];
rover_image="rover.png";
function add() {
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_image;
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}

function uploadbg() {
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img,rover_X,rover_Y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38') {
          Up();
          console.log("Up arrow is pressed");
    }
    if(keypressed=='40') {
        Down();
        console.log("Down arrow is pressed");
  }
  if(keypressed=='37') {
    Left();
    console.log("Left arrow is pressed");
  }
  if(keypressed=='39') {
    Right();
    console.log("Right arrow is pressed");
  }
}

function Up() {
  if (rover_Y>=0){
    rover_Y=rover_Y-10;
    console.log("rover_X:"+rover_X+" rover_Y:"+rover_Y);
    uploadbg();
    uploadrover();
  }
}

function Down() {
  if (rover_Y<=500){
    rover_Y=rover_Y+10;
    console.log("rover_X:"+rover_X+" rover_Y:"+rover_Y);
    uploadbg();
    uploadrover();
  }
}

function Left() {
  if (rover_X>=0){
    rover_X=rover_X-10;
    console.log("rover_X:"+rover_X+" rover_Y:"+rover_Y);
    uploadbg();
    uploadrover();
  }
}

function Right() {
  if (rover_X<=700){
    rover_X=rover_X+10;
    console.log("rover_X:"+rover_X+" rover_Y:"+rover_Y);
    uploadbg();
    uploadrover();
  }
}