const sun_rays = document.getElementsByClassName('sun_rays')[0];
const Height = window.innerHeight;
const Width = window.innerWidth;

const scrollArea = 1000 - Height;

window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY || this.window.scrollTop;
    const scrollPercent = scrollTop / scrollArea || 0;
    sun_rays.style.opacity = 1 - Math.min(1, scrollPercent);
});