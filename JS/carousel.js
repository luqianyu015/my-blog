// 图片轮播
const carouselImgs = document.querySelectorAll('.carousel-img');
let currentImg = 0;

function nextImage() {
    carouselImgs[currentImg].classList.remove('active');
    currentImg = (currentImg + 1) % carouselImgs.length;
    carouselImgs[currentImg].classList.add('active');
}

setInterval(nextImage, 3000);