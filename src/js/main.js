var to_top = document.querySelector(".to-top");

window.onscroll = function () {
    document.querySelector('.hero').style.backgroundPositionX = (window.pageXOffset / 5.0) + 'px';
    document.querySelector('.hero').style.backgroundPositionY = (window.pageYOffset / 5.0) + 'px';
    if (window.pageYOffset < 200) {
        to_top.classList.add('hidden');
    } else {
        to_top.classList.remove('hidden');
    }
};

var slideCount = document.querySelectorAll('.slide').length;
var curSlide = 1;
var duration = 5000;

function showSlide(n) {
    document.querySelectorAll('.slide').forEach(function (slide) {
        slide.classList.remove('flex');
        slide.classList.add('hidden');
    });
    document.querySelector('.slide-' + n).classList.remove('hidden');
    document.querySelector('.slide-' + n).classList.add('flex');
    showDot(n);
}

function showDot(n) {
    document.querySelectorAll('.dot').forEach(function (dot ) {
        dot.classList.remove('active');
    });
    document.querySelector('.dot-' + n).classList.add('active');
}

document.querySelectorAll('.prev, .next').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.classList.contains('next')) {
            curSlide++;
            if (curSlide > slideCount) {
                curSlide = 1;
            }
        } else {
            curSlide--;
            if (curSlide <= 0) {
                curSlide = slideCount;
            }
        }
        console.log(curSlide)
        showSlide(curSlide);
    });
})

document.querySelectorAll('.dot').forEach(function (dot) {
    dot.addEventListener('click', function (e) {
        e.preventDefault();
        curSlide = this.dataset.slide; // data-slide
        showSlide(curSlide);
    });
});

function auto_play() {
    curSlide++;
    if(curSlide > slideCount){
        curSlide = 1;
    }
    showSlide(curSlide);
}

var autoPlay = setInterval(auto_play,duration);

document.querySelector('.slides').addEventListener('mouseenter',()=>{
    clearInterval(autoPlay);
});

document.querySelector('.slides').addEventListener('mouseleave',function(){
    autoPlay = setInterval(auto_play,duration);
});

document.querySelector('.menu-btn').addEventListener('click',function(){
    document.querySelector('.menu').classList.remove("hidden");
    document.querySelector('.welcome').classList.add("hidden");
    document.querySelector('.logo').classList.add("hidden");
    document.querySelector('.menu-btn').classList.add("hidden");
    
});
document.addEventListener('click',function(e){
    if(!e.target.classList.contains('menu-btn')){
        let menu = document.querySelector('.menu');
        if(!menu.classList.contains('hidden')){
            document.querySelector('.menu').classList.add("hidden");
        document.querySelector('.welcome').classList.remove("hidden");
        document.querySelector('.logo').classList.remove("hidden");
        document.querySelector('.menu-btn').classList.remove("hidden");
        }
    }   
});