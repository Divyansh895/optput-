canvas=new fabric.Canvas("myCanvas");
var block_img_width=30;
var block_img_height=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_img_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function (Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
    });
}


function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img) {
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
block_img_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_img_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var key_pressed=e.keyCode;
    console.log(key_pressed);

if (e.shiftKey==true&&key_pressed=="80") {
    block_img_width=block_img_width+10;
block_img_height=block_img_height+10;
document.getElementById("current_width").innerHTML = block_img_width;
document.getElementById("current_height").innerHTML = block_img_height;
}
if (e.shiftKey==true&&key_pressed=="77") {
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML= block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;

}
if (key_pressed=="38") {
    up();
    console.log("up");
}
if (key_pressed=="40") {
    down();
    console.log("down");
}
if (key_pressed=="37") {
    left();
    console.log("left")
}
if (key_pressed=="39"){ 
right();
console.log("right");
}
if (key_pressed=="70") {
    new_image("ironman_face.png");
    
}
if (key_pressed=="66") {
    new_image("spiderman_body.png");
}
if (key_pressed=="76") {
    new_image("hulk_legs.png");
}
if (key_pressed=="82") {
    new_image("thor_left_hand.png");
}
if (key_pressed=="72") {
    new_image("captian_america_left_hand.png");
}

}

function up() {
    if (player_y>=0) {
        player_y=player_y-block_img_height;
    console.log(block_img_height);
    console.log(player_x,player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function down() {
    if (player_y<=700) {
        player_y=player_y+block_img_height;
        console.log(block_img_height);
        console.log(player_x,player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x>0) {
        player_x=player_x-block_img_width;
        console.log(block_img_width);
        console.log(player_x,player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x<900) {
        player_x=player_x+block_img_width;
        console.log(block_img_width);
        console.log(player_x,player_y);
        canvas.remove(player_object);
        player_update(); 
    }
}
