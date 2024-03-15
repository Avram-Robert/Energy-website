const wind = document.getElementsByClassName('wind')[0];
const Height = window.innerHeight;
const Width = window.innerWidth;
const scrollArea = 1000 - Height;

window.addEventListener('scroll', function(){
    let scrollTop = window.scrollY || this.window.scrollTop;
    let scrollPercent = scrollTop / scrollArea || 0;
    wind.style.left = -scrollPercent * Width + 'px';
});