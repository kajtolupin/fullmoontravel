
var next = document.querySelector(".slide-right");

var slider = document.querySelector(".review-list");
var newItemWidth = 0;


function slideToRight() {

    var itemWidth = document.querySelector(".review-list .col").offsetWidth;
    newItemWidth = newItemWidth + itemWidth;

    if(newItemWidth >= itemWidth*3) {
        newItemWidth = 0;
    }

    slider.style.transform = `translate3d(-${newItemWidth}px, 0, 0)`;

    console.log(itemWidth);
}

next.addEventListener("click", slideToRight);




