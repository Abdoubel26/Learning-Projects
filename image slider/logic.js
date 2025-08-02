let slideindex = 0;
let interId = 0;
const images = document.querySelectorAll('.images');


document.addEventListener("DOWContentLoaded",initslider())

function initslider() {   
    if(images.length > 0){
        images[slideindex].classList.add('displaying');
        interId = setInterval(slideRight, 5000);
        console.log(interId);    
    }
}



function showimg(index) {   
    if(index + 1 > images.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = images.length - 1;
    }

    images.forEach(slide => {
        slide.classList.remove('displaying');
    });

    images[slideindex].classList.add('displaying');
    }




function slideLeft() {  
    clearInterval(interId);
    slideindex--;
    showimg(slideindex);
}


function slideRight() {   
    slideindex++;
    showimg(slideindex);
}


