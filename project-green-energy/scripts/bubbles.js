const bubbles = document.getElementsByClassName('bubbles')[0];
const Height = window.innerHeight;
const Width = window.innerWidth;

const scrollArea = 1000 - Height;

window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY || this.window.scrollTop;
    const scrollPercent = (scrollTop / scrollArea) * 100 || 0;
    bubbles.style.top = -scrollPercent + '%';
});