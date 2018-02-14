/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var x_boundary = 800; //pixel width
var img1 = document.getElementById('PacMan');
var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};

exercise.updatePosition = function() {
    exercise.pos.x += exercise.increment;
    img1.style.left = exercise.pos.x + "px";
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
};

exercise.chooseImage = function() {
    // choose between all 4 images
    exercise.flag = 1 - exercise.flag;
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            img1.src = "PacMan2.png";
        } else {
            img1.src = "PacMan1.png";
        }
    } else if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            img1.src = "PacMan4.png";
        } else {
            img1.src = "PacMan3.png";
        }
    }
};

exercise.checkWallCollision = function() {
    if (exercise.pos.x > x_boundary-img1.width || exercise.pos.x < 0) {
        exercise.increment = -exercise.increment;
    }
    // reset the direction of motion if wall is hit
    // you need to take into account image width
};