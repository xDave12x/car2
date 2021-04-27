canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=50;
rover_height=50;
rover_x=10;
rover_y=10;
car2_x=10;
car2_y=60;
background_img="racing.jpg";
rover_img="car1.png";
car2_img="car2.png";
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbg;
    background_imgtag.src=background_img;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
    car2_imgtag=new Image();
    car2_imgtag.onload=uploadrover2;
    car2_imgtag.src=car2_img;
}
function uploadbg(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
function uploadrover2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");    
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='65'){
        left2();
        console.log("left2");
    }
    if(keypressed=='119'){
        up2();
        console.log("up2");
    }
    if(keypressed=='115'){
        down2();
        console.log("down2");
    }
    if(keypressed=='68'){
        right2();
        console.log("right2");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
        uploadrover2();
    }
}
function up2(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("when up arrow pressed x="+car2_x+"y="+car2_y);
        uploadbg();
        uploadrover();
        uploadrover2();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
        uploadrover2();
    }
}
function down2(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("when down arrow pressed x="+car2_x+"y="+car2_y);
        uploadbg();
        uploadrover2();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
        uploadrover2();
    }
}
function left2(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("when left arrow pressed x="+car2_x+"y="+car2_y);
        uploadbg();
        uploadrover2();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
        uploadrover2();
    }
}
function right2(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        console.log("when right arrow pressed x="+car2_x+"y="+car2_y);
        uploadbg();
        uploadrover2();
        uploadrover();
    }
}