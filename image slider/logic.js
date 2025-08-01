let slideindex = 0;
let inter
const images = document.querySelectorAll('.images');


document.addEventListener("DOWContentLoaded",initslider())

function initslider() {   
    images[slideindex].classList.add('displaying');

}




function showimg(index) {   

    if(index >= images.length){
        slideindex = 0;
    }
}


function slideLeft() {  
    slideindex++;
    showimg(slideindex);
}


function slideRight() {   
    
}


